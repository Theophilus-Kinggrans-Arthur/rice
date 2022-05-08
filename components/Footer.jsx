import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/Rice6.png" objectFit="cover" alt="" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, THIS IS RUTH RICE SHOP AND IS GOOD TO USE
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RICE SHOP</h1>
          <p className={styles.text}>
            CK 2102938839 Kissi #304.
            <br /> Central Region
            <br /> H/N 4/77
          </p>
          <p className={styles.text}>
            CK 2102944004 Komenda Road #304.
            <br /> Central Region
            <br /> H/N 7/120
          </p>
          <p className={styles.text}>
            CK 2102339873 Elmina #304.
            <br /> Central Region
            <br /> 0553940971
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OUR WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9AM - 4PM
          </p>
          <p className={styles.text}>
            SATURDAY TO SUNDAY
            <br /> 1PM - 5PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
