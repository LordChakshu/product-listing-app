import React, { useContext } from "react";
import { FavouritesContext } from "../../context/FavouritesContext";
import ProductCard from "../ProductCard/productCard";
import styles from './Favourites.module.css'

const Favourites = ({ allProducts }) => {
    const { favourites } = useContext(FavouritesContext);

    // Filtering products that are in favourites
    const favouriteProducts = allProducts.filter((p) =>
        favourites.includes(p.id)
    );

    if (favouriteProducts.length === 0)
        return <p>No favourite products yet.</p>

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {favouriteProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>

    );
};

export default Favourites;