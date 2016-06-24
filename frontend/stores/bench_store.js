const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher')
const BenchStore = new Store(Dispatcher);

let _benches = {}

BenchStore.all = function(){
  return Object.assign({}, _benches);
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
