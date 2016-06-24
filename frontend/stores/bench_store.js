const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher')
const BenchStore = new Store(Dispatcher);
const BenchConstants = require('../constants/bench_constants');

let _benches = {}

BenchStore.all = function(){
  const benches = [];
  for (let id in _benches) {
    if (_benches.hasOwnProperty(id)){
      benches.push(_benches[id]);
    }
  }
  return benches;
}

BenchStore.resetAllBenches = function(benches){
  _benches = benches;
  BenchStore.__emitChange();
}

BenchStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      this.resetAllBenches(payload.benches);
      break;
  }
}

module.exports = BenchStore;
