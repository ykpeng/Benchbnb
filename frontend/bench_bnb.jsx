const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

// const BenchStore = require('./stores/bench_store');
// const BenchApiUtil = require('./util/bench_api_util');
// const BenchActions = require('./actions/bench_actions');
// const BenchConstants = require('./constants/bench_constants');
// const BenchIndex = require('./components/bench_index');
const Search = require('./components/search');

const App = React.createClass({
  render(){
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    )
  }
});

const Router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search}/>
    </Route>
  </Router>
)

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(Router, document.getElementById('content'));
});
