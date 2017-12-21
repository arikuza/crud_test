import React, { Component } from 'react';
import cn from 'classnames';
import UserInfo from './components/UserInfo';

import styles from './UserList.css';

export default class UserList extends Component {
  render() {

    const usersList = this.props.users;
    const removeUser = this.props.removeUser;
    const editUser = this.props.editUser;

    return (
      <section className={styles.container}>
      {Object.keys(usersList).length === 0
        ? <h1 className={styles.title}>User list is empty</h1>
        : <div>
            <div className={styles.header}>
            <div className={cn(styles.info, styles.name)}>NAME</div>
            <div className={styles.info}>BIRTH DATE</div>
            <div className={styles.info}>ADDRESS</div>
            <div className={styles.info}>CITY</div>
            <div className={styles.info}>MOBILE</div>
          </div>
          <div className={styles.tableContainer}>
          {Object.keys(usersList).map((userID) => 
            <UserInfo
              removeUser={removeUser}
              editUser={editUser}
              key={userID}
              user={Object.assign({}, usersList[userID], {id: userID})}
            />
          )}
          </div>
        </div>
    }
      </section>
    );
  }
}
