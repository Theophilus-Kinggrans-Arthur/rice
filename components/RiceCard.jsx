import Image from "next/image";
import React from "react";
import styles from "../styles/RiceCard.module.css";

const RiceCard = ({ rice }) => {
  return (
    <div className={styles.container}>
      <Image src="/img/rice.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>RICE LAND</h1>
      <span className={styles.price}>$6.00</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        quibusdam suscipit numquam nulla quaerat cum odio fugit odit et
        delectus.
      </p>
    </div>
  );
};

export default RiceCard;
