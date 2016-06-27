const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const hashHistory = require('react-router').hashHistory;

const BenchMap = React.createClass({
  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.markers = [];

    this.token = BenchStore.addListener(this._onChange);
    this.map.addListener('click', this._handleClick);
    this.map.addListener('idle', this._onMapIdle);
  },

  _handleClick(coords){
      console.log(coords);
      const lat = coords.latLng.lat();
      const lng = coords.latLng.lng();
      hashHistory.push({
      pathname: "benches/new",
      query: {lat: lat, lng: lng}
    });
  },

  _onMapIdle(){
    let LatLngBounds = this.map.getBounds();
    let ne = LatLngBounds.getNorthEast();
    let sw = LatLngBounds.getSouthWest();
    let bounds = { northEast: {lat: ne.lat(), lng: ne.lng()}, southWest: {lat: sw.lat(), lng: sw.lng()}};
    BenchActions.fetchAllBenches(bounds);
  },

  _addMarkers(){
    const currentBenchIds = this.markers.map((marker)=>marker.benchId);
    BenchStore.all().forEach((bench) => {
      if (!currentBenchIds.includes(bench.id)){
        let myLatLng = {lat: bench.lat, lng: bench.lng};
        let marker = new google.maps.Marker({
          position: myLatLng,
          map: this.map,
          benchId: bench.id
        });

        this.markers.push(marker);
      }
    })
    // this.currentBenchIds = this.markers.map((marker)=>marker.benchId);
  },

  _removeMarkers(){
    const currentBenchIds = this.markers.map((marker)=>marker.benchId);

    const idsToRemove = [];
    const storeBenchIds = BenchStore.all().map( (bench) => bench.id );

    currentBenchIds.forEach( (id) => {
      if (!storeBenchIds.includes(id)){
        idsToRemove.push(id);
      }
    });

    const markersToRemove = [];
    this.markers.forEach((marker, idx)=> {
      if (idsToRemove.includes(marker.benchId)) {
        markersToRemove.push(marker)
      }
    });

    markersToRemove.forEach((marker) => {
      let idx = this.markers.indexOf(marker);
      this.markers[idx].setMap(null);
      this.markers.splice(idx, 1)
    });
  },

  _onChange(){
    this._addMarkers();
    this._removeMarkers();
  },

  render(){
    return (<div className='map' ref='map'></div>)
  }
})

module.exports = BenchMap;
