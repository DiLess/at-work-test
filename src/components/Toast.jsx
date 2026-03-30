import { useEffect } from "react";
import CheckedBox from "../assets/icon/Checked-box.svg";
import styles from "./Toast.module.scss";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.toast} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <img src={CheckedBox} alt="" />
          <p className={styles.message}>{message}</p>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
