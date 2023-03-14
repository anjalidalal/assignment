import React, { useState } from "react";
import styles from "./auth.module.css";
import { signIn } from "./firebase";

const Authentication = () => {
  return (
    <div className={styles.signInPage}>
      <div className={styles.modal}>
        <h1>SIGNIN</h1>
        <button className={styles.signInBtn} onClick={signIn}>
          <img src="./google.png" width="20px" height="20px" alt="" /> Sign In
          With Google{" "}
        </button>
        <p>
          * By Continuing you agree to the{" "}
          <span className="span"> Terms of Services</span>and{" "}
          <span className="span">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Authentication;
