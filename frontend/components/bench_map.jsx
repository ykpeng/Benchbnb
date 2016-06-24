const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass({
  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    this.token = BenchStore.addListener(this._onChange);
    this.map.addListener('idle', () => BenchActions.fetchAllBenches());
  },

  _onChange(){
    BenchStore.all().forEach((bench) => {
      let myLatLng = {lat: bench.lat, lng: bench.lng};

      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: bench.description
      });
    })
  },

  render(){
    return (<div className='map' ref='map'></div>)
  }
})

module.exports = BenchMap;
