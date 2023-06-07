import React from "react";
import styles from "../styles/HomeInput.module.scss";

const EmailInput = () => {
  return (
    <>
      <input
        className={styles.input}
        required
        type="email"
        placeholder="tim.jennings@example.com"
      />
    </>
  );
};

export default EmailInput;
