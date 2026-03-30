import styles from "./Input.module.scss";

const Input = ({ label, error, heading, ...props }) => {
  return (
    <div className={styles.inputGroup}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {label && (
        <label className={`${styles.label} text1-semibold`}>{label}</label>
      )}
      <input
        className={`${styles.input} ${error ? styles.error : ""}`}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
      {props.information && (
        <div className={styles.information}>{props.information}</div>
      )}
    </div>
  );
};

export default Input;
