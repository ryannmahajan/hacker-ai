import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './TopBar.module.scss'; // Import SCSS styles
import logo from './icons/ByteBook_LOGO.png'; // Import the logo image
import userIcon from './icons/User_logo.png'; // Import the user image

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo"  />
      </div>
      <div className={styles.navLinks}>
        <Link to="/">
          <img src={userIcon} alt="User" className={styles.userIcon} />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
