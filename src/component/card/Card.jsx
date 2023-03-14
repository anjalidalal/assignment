import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.profileCard}>
          <div className={styles.avtar}>
            <img src="./avatar.png" alt="" width="100%" />
          </div>
          <div>
            <h1>Ekko</h1>
            <p className={styles.url}>www.ekko.network</p>
            <div className={styles.socialMediaFrame}>
              <img src="./facebook.png" alt="" />
              <img src="./dribble.png" alt="" />
              <img src="./linkedin.png" alt="" />
              <img src="./discord.png" alt="" />
              <img src="./google.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles.cardButtonslist}>
          <button>
            <img src="./order.png" width="22px" height="22px" alt="" />
            Orders
          </button>
          <button>
            <img src="./customer.png" width="22px" height="22px" alt="" />
            Customers
          </button>
          <button>
            <img src="./products.png" width="22px" height="22px" alt="" />
            Products
          </button>
          <button>
            <img src="./marketing.png" width="22px" height="22px" alt="" />
            Marketing
          </button>
          <button>
            <img src="./discount1.png" width="22px" height="22px" alt="" />
            Discounts
          </button>
        </div>
        <div className={styles.personalAccount}>
          <img src="./user.png" width="26px" height="26px" alt="" />
          <p>
            Personal Account
            <span>Switch to Pro plan.</span>
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.settings}>
          <img src="./settings.png" alt="" />
        </div>
        <div className={styles.brightness}>
          <img src="./brightness.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
