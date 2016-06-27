const BenchApiUtil = require('../util/bench_api_util');
const BenchConstants = require('../constants/bench_constants');
const Dispatcher = require('../dispatcher/dispatcher');

const BenchActions = {
  receiveAllBenches: function(benches){
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    })
  },
  fetchAllBenches: function(bounds){
    BenchApiUtil.fetchAllBenches(bounds, this.receiveAllBenches);
  }
}

module.exports = BenchActions;
