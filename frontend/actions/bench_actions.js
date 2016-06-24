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
  fetchAllBenches: function(){
    BenchApiUtil.fetchAllBenches(this.receiveAllBenches);
  }
}

module.exports = BenchActions;
