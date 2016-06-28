const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(e){
    e.preventDefault();
    SessionActions.logout();
  },

  greeting() {
  if (SessionStore.isUserLoggedIn()) {
    return (
      <hgroup>
        <h2>Hi, {SessionStore.currentUser().username}!</h2>
        <input type="submit" value="logout" onClick={ this._handleLogOut } />
      </hgroup>
    );
  } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
    return (
      <nav>
        <Link to="/login">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
  }
},
  render(){
    return (
      <div>
        <header>
          <Link to="/"><h1>Bench BnB</h1></Link>
          { this.greeting() }
        </header>
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
