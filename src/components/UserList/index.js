import React, { Component } from 'react';
import UserInfo from './components/UserInfo';

export default class UserList extends Component {
  render() {

    const usersList = this.props.users;
    const removeUser = this.props.removeUser;

    return (
      <section>
        {Object.keys(usersList).map((userID) => 
          <UserInfo removeUser={removeUser} key={userID} user={Object.assign({}, usersList[userID], {id: userID})} />
        )}
      </section>
    );
  }
}
