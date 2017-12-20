import  { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { reducer as formReducer } from 'redux-form';

const users = handleActions({
  [actions.addUser](state, { payload: {user} }){
    return { ...state, [user.id]: user };
  },
}, {});

export default combineReducers({
  users,
  form: formReducer
});
