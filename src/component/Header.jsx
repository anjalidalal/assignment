import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.searchBar}>
          <img src="./search.png" width="23px" height="23px" alt="" />
          <input type="text" placeholder="Search" />
        </div>
        <div className={styles.headerIcon}>
          <div className={styles.notifications}>
            <img src="./notification.png" width="25px" height="25px" alt="" />
          </div>
          <div className={styles.profile}>
            <img src="./user.png" width="45px" height="45px" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.growthStatus}>
        <div className={styles.yellowCard}>
          <h1>Total Sales</h1>
          <p>
            721K
            <span>
              +11.01%{" "}
              <img src="./rise(b).png" width="12px" height="12px" alt="" />
            </span>
          </p>
        </div>
        <div className={styles.blackCard}>
          {" "}
          <h1>Visits</h1>
          <p>
            367K
            <span>
              +9.15% <img src="./rise.png" width="12px" height="12px" alt="" />
            </span>
          </p>
        </div>
        <div className={styles.yellowCard}>
          {" "}
          <h1>New Users</h1>
          <p>
            1,156
            <span>
              -0.56%{" "}
              <img src="./crisis.png" width="12px" height="12px" alt="" />
            </span>
          </p>
        </div>
        <div className={styles.blackCard}>
          {" "}
          <h1>Active Users</h1>
          <p>
            239K
            <span>
              -1.48%{" "}
              <img src="./crisis2.png" width="12px" height="12px" alt="" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
