import React from "react";
import styles from "./Filters.module.css";

const SortOptions = ({
    priceSort,
    ratingSort,
    onPriceSortChange,
    onRatingSortChange
}) => {
    return (
        <div className={styles.filtersContainer}>
            <label>Price</label>
            <select value={priceSort} onChange={(e) => onPriceSortChange(e.target.value)}>
                <option value="">Sort by Price</option>
                <option value="price-asc">Low → High</option>
                <option value="price-desc">High → Low</option>
            </select>

            <label>Rating</label>
            <select value={ratingSort} onChange={(e) => onRatingSortChange(e.target.value)}>
                <option value="">Sort by Rating</option>
                <option value="rating-asc">Low → High</option>
                <option value="rating-desc">High → Low</option>
            </select>
        </div>

    );
};

export default SortOptions;
