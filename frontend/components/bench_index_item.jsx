const React = require('react');

const BenchIndexItem = React.createClass({
  render(){
    return (
      <div>
        <p>{this.props.bench.description}</p>
      </div>
    )
  }
})

module.exports = BenchIndexItem;
