const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');
const BenchConstants = require('./constants/bench_constants');

var MyComponent = React.createClass({
  render() {
    return(
      <div>Inside component</div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<MyComponent />, document.getElementById('content'));
});
