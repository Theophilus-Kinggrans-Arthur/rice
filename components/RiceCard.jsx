import Image from "next/image";
import React from "react";
import styles from "../styles/RiceCard.module.css";
import Link from "next/link";

const RiceCard = ({ rice }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${rice._id}`} passHref>
        <Image src={rice.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{rice.title}</h1>
      <span className={styles.price}>${rice.prices[0]}</span>
      <p className={styles.desc}>{rice.desc}</p>
    </div>
  );
};

export default RiceCard;
