import { createAction } from 'redux-actions';

export const addUser = createAction('ADD_USER');
export const editUser = createAction('EDIT_USER');
export const clearUser = createAction('CLEAR_USER');
export const removeUser = createAction('REMOVE_USER');
export const saveUser = createAction('SAVE_USER');

export const updateDays = createAction('UPDATE_DAYS');
