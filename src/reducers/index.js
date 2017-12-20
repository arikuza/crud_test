import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { reducer as formReducer } from 'redux-form';
import { v4 } from 'node-uuid';
import omit from 'lodash/omit';

const users = handleActions({
  [actions.addUser](state, { payload: { user } }){
    return { ...state, [v4()]: user };
  },
  [actions.removeUser](state, { payload: id }){
    return omit(state, id);
  },
}, {});

export default {
  users,
  form: formReducer,
};
