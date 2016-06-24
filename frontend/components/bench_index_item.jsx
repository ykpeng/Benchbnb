const React = require('react');

const BenchIndexItem = React.createClass({
  render(){
    console.log(this.props.bench);
    console.log(this.props.description);
    return (
      <div>
        <p>{this.props.bench.description}</p>
      </div>
    )
  }
})

module.exports = BenchIndexItem;
