import { useState } from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  variant = "default",
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${isHovered && styles.hovered} text2-semibold`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
