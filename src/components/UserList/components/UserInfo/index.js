import React from 'react';
import cn from 'classnames';
import styles from './UserInfo.css';

const UserInfo = ({ user, removeUser, editUser }) => {

  const handlerOnRemove = () => {
    removeUser(user.id);
  }

  const handlerOnEdit = () => {
    console.log('in UserInfo user is: ', user);
    editUser(user);
  }

  return (
  <div className={styles.container}>
    <div className={cn(styles.info, styles.name)}>{user.name}</div>
    <div className={styles.info}>
      {user.birthYear && new Date(user.birthYear, user.birthMonth, user.birthDay).toLocaleDateString('en-US')}
    </div>
    <div className={styles.info}>{user.adress}</div>
    <div className={styles.info}>{user.city}</div>
    <div className={styles.info}>{user.mobile}</div>
    <button onClick={handlerOnRemove} className={cn(styles.button, styles.warning)}>Delete</button>
    <button onClick={handlerOnEdit} className={styles.button}>Edit</button>
  </div>
)
};

export default UserInfo;
