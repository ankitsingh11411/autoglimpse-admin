import React from 'react';
import styles from './notfound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className={styles.homeLink}>
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
