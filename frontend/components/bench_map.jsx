const React = require('react');
const ReactDOM = require('react-dom');

const BenchMap = React.createClass({
  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435}, // this is SF
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  render(){
    return (<div className='map' ref='map'></div>)
  }
})

module.exports = BenchMap;
