import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Favorite from "../components/icons/Favorite";
import Notification from "../components/icons/Notification";
import styles from "./Header.module.scss";

const Header = () => {
  const avatarUrl = `https://api.dicebear.com/9.x/micah/svg?seed=my`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="" />
        </Link>

        <div className={styles.userInfoWrpr}>
          <div className={styles.userIcons}>
            <span>
              <Favorite />
            </span>
            <span>
              <Notification />
            </span>
          </div>
          <div className={styles.userInfo}>
            <div className={styles.avatar}>
              <img src={avatarUrl} alt="Avatar" />
            </div>
            <span className={`${styles.username} `}>Ivani1234</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
