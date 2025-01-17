import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/dashboard" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="/add-cars" className={styles.navLink}>
              Add Cars
            </a>
          </li>
          <li className={styles.navItem}>
            <button className={styles.logoutButton}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
