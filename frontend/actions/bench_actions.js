const BenchApiUtil = require('../util/bench_api_util');
const BenchConstants = require('../constants/bench_constants');
const Dispatcher = require('../dispatcher/dispatcher');

const BenchActions = {
  fetchAllBenches: function(bounds){
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  },
  receiveAllBenches: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  },
  createBench: function(bench){
    BenchApiUtil.createBench(bench, this.receiveBench);
  },
  receiveBench: function(bench){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    })
  }
}

module.exports = BenchActions;
