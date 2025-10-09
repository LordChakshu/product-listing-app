import React, { useContext} from "react";
import styles from "./ProductCard.module.css";
import filledHeart from '../../assets/red-heart.svg'
import emptyHeart from '../../assets/empty-heart.svg'
import { FavouritesContext } from "../../context/FavouritesContext";

const ProductCard = ({ product }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.includes(product.id);

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>${product.price}</p>
      </div>
      <button onClick={() => toggleFavourite(product.id)}>
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
