const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');
const BenchConstants = require('./constants/bench_constants');
const BenchIndex = require('./components/bench_index');
const Search = require('./components/search');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Search />, document.getElementById('content'));
});
