const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(Dispatcher);
let _errors = {};
let _form = "";

ErrorStore.formErrors = function(form){
  if (form === _form){
    return Object.assign({}, _errors);
  } else {
    return {};
  }
};

ErrorStore.form = function(){
  return _form;
};

const setErrors = function(form, errors){
  _form = form;
  _errors = errors;
};

const clearErrors = function(){
  _form = "";
  _errors = {};
};

ErrorStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload.form, payload.errors);
      this.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      this.__emitChange();
      break;
  }
}

module.exports = ErrorStore;
