const React = require('react');
const BenchActions = require('../actions/bench_actions');
const BenchStore = require('../stores/bench_store');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass({
  getInitialState(){
    return { benches: BenchStore.all() };
  },

  componentDidMount() {
    this.token = BenchStore.addListener(this._onChange);
    BenchActions.fetchAllBenches();
  },

  _onChange(){
    this.setState({ benches: BenchStore.all() });
  },

  componentWillUnmount(){
    this.token.remove();
  },

  render(){
    return(
      <div>
        {this.state.benches.map((bench) => {
          return <BenchIndexItem bench={bench} key={bench.description} />;
        })}
      </div>
    );
  }
});

module.exports = BenchIndex;
