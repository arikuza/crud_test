import React from 'react';
import styles from './UserInfo.css';



const UserInfo = ({ user, removeUser }) => {
  const handlerOnClick = () => {
    removeUser(user.id);
  }
  return (
  <div className={styles.container}>
    <div className={styles.info}>{user.name}</div>
    <div className={styles.info}>
      {user.birthYear && new Date(user.birthYear, user.birthMonth, user.birthDay).toLocaleDateString()}
    </div>
    <div className={styles.info}>{user.adress}</div>
    <div className={styles.info}>{user.city}</div>
    <div className={styles.info}>{user.mobile}</div>
    <button onClick={handlerOnClick}>Delete</button>
  </div>
)
};

export default UserInfo;
