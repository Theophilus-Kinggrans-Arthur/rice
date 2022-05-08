import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);
  const rice = {
    id: 1,
    img: "/img/rice.png",
    name: "RiceLand",
    price: [3.0, 4.0, 5.0],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={rice.img} layout="fill" objectFit="contain" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{rice.name}</h1>
        <span className={styles.price}>${rice.price[size]}</span>
        <p className={styles.desc}>{rice.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose Additional Ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredient</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="grain"
              name="grain"
              className={styles.checkbox}
            />
            <label htmlFor="grain">Extra Long Grain</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="brown"
              name="brown"
              className={styles.checkbox}
            />
            <label htmlFor="brown">Brown Rice</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
