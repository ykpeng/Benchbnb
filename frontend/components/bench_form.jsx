const React = require('react');
const BenchActions = require('../actions/bench_actions');

const BenchForm = React.createClass({
  getInitialState(){
    return { description: "", seating: "" };
  },

  _handleSubmit(e){
    e.preventDefault();
    const bench = { description: this.state.description, seating: this.state.seating, lat: this.props.location.query.lat, lng: this.props.location.query.lng }
    BenchActions.createBench(bench);
  },

  _updateDescription(e){
    this.setState({description: e.target.value})
  },

  _updateSeating(e){
    this.setState({seating: e.target.value})
  },

  // _updateLat(e){
  //   this.setState({lat: e.target.value})
  // },
  //
  // _updateLng(e){
  //   this.setState({lng: e.target.value})
  // },

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <label>Description</label>
        <input type="text" value={this.state.description} onChange={this._updateDescription}/>
        <br/>

        <label>Number of seats</label>
        <input type="text" value={this.state.seating} onChange={this._updateSeating}/>
        <br/>

        <label>Latitude</label>
        <input type="text" value={this.props.location.query.lat} disabled/>
        <br/>

        <label>Longitude</label>
        <input type="text" value={this.props.location.query.lng} disabled/>
        <br/>

        <input type="submit" value="Submit"/>
      </form>
    );
  }
})

module.exports = BenchForm;
