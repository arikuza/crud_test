import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import * as actionCreators from './actions';
import styles from './App.css';

class App extends Component {

  removeUser = (id) => {
    this.props.store.dispatch(actionCreators.removeUser(id));
  };

  addUser = (values) => {
    this.props.store.dispatch(actionCreators.addUser({ user: values }));
  };

  editUser = (user) => {
    console.log('editUser works in App! and user: ', user);
    this.props.store.dispatch(actionCreators.editUser(user));
  };

  saveUser = (user) => {
    console.log('saveUser works in App! and user is: ', user);
    this.props.store.dispatch(actionCreators.saveUser(user));
  }

  clearUser = () => {
    this.props.store.dispatch(actionCreators.clearUser());
  };

  updateDays = (days) => {
    this.props.store.dispatch(actionCreators.updateDays(days));
  };

  render() {
    return (
      <div className={styles.container}>
        <UserForm addUser={this.addUser} updateDays={this.updateDays} saveUser={this.saveUser} clearUser={this.clearUser} />
        <UserList removeUser={this.removeUser} editUser={this.editUser} users={this.props.users}/>
      </div>
    );
  }
};

const mapStateToProps = state => {
  const props = {
    users: state.users,
  }
  return props;
};

export default connect(mapStateToProps, actionCreators)(App);
