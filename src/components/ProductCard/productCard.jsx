import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import filledHeart from '../../assets/red-heart.svg'
import emptyHeart from '../../assets/empty-heart.svg'

const ProductCard = ({ product }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
      <button onClick={() => setIsFavourite(!isFavourite)}>
        <img
          src={isFavourite ? filledHeart : emptyHeart}
          alt="favourite"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default ProductCard;
