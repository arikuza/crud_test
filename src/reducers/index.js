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
  [actions.saveUser](state, { payload: user }){
    return { ...state, [user.id]: omit(user, user.id) };
  },
}, {});

const userEdit = handleActions({
  [actions.editUser](state, { payload: user }){
    console.log('editUser action! And user is: ', user);
    return user;
  },
  [actions.clearUser](state){
    console.log('clearUser action! And user is: ');
    return {};
  },
}, {});

const birthDays = handleActions({
  [actions.updateDays](state, { payload: days }){
    console.log('updateDays works!: '+ days);
    return { ...state, days };
  },
}, {});

export default {
  users,
  userEdit,
  birthDays,
  form: formReducer,
};
