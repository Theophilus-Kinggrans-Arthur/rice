import React from "react";
import styles from "../styles/RiceList.module.css";
import RiceCard from "./RiceCard";

const RiceList = ({ riceList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST RICE SHOP IN TOWN</h1>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis facere
        eligendi saepe repellendus! Molestias cupiditate totam voluptatem
        reiciendis aut sunt.
      </p>
      <div className={styles.wrapper}>
        {riceList.map((rice) => (
          <RiceCard key={rice.id} rice={rice} />
        ))}
      </div>
    </div>
  );
};

export default RiceList;
