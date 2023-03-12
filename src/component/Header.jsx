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
        <div className={styles.totalSales}></div>
        <div className={styles.visits}></div>
        <div className={styles.newUsers}></div>
        <div className={styles.activeUsers}></div>
      </div>
    </>
  );
};

export default Header;
