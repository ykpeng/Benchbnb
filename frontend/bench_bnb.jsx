const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const BenchApiUtil = require('./util/bench_api_util');
const Search = require('./components/search');
const BenchForm = require('./components/bench_form');
const SessionApiUtil = require('./util/session_api_util');
const SessionActions = require('./actions/session_actions');
const SessionStore = require('./stores/session_store');
const LoginForm = require('./components/login_form');
const App = require('./components/app');

const _ensureLoggedIn = function(nextState, replace){
  if (!SessionStore.isUserLoggedIn()){
    replace("/login");
  }
};

const router = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search}/>
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={LoginForm}/>
      <Route path="/benches/new" component={BenchForm} onEnter={_ensureLoggedIn}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render(router, document.getElementById('content'));
});
