import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Names</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/rice2.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>RICE LAND</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredient, Long Grain
              </span>
            </td>
            <td>
              <span className={styles.price}>$3.00</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$6.00</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/rice2.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>RICE LAND</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredient, Long Grain
              </span>
            </td>
            <td>
              <span className={styles.price}>$3.00</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$6.00</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$19.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$19.00
          </div>
          <button className={styles.button}>CHECK NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
