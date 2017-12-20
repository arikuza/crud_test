import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import * as actionCreators from './actions';
import './App.css';

class App extends Component {

  removeUser = (id) => {
    this.props.store.dispatch(actionCreators.removeUser(id));
  }

  addUser = (values) => {
    this.props.store.dispatch(actionCreators.addUser({ user: values }));
  }

  render() {
    return (
      <div className="App">
        <UserForm addUser={this.addUser} />
        <UserList removeUser={this.removeUser} users={this.props.users}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const props = {
    users: state.users,
    isEdit: state.isEdit,
  }
  return props;
};

export default connect(mapStateToProps, actionCreators)(App);
