import React from "react";
import styles from "./Filters.module.css";


const priceOptions = [
    { label: "All Prices", from: 0, to: Infinity },
    { label: "$0 - $50", from: 0, to: 50 },
    { label: "$50 - $100", from: 50, to: 100 },
    { label: "$100 - $200", from: 100, to: 200 },
    { label: "$200 - $500", from: 200, to: 500 },
    { label: "$500+", from: 500, to: Infinity },
];

const Filters = ({
    category,
    setCategory,
    setPriceRange,
    rating,
    setRating,
}) => {
    const handlePriceChange = (e) => {
        const selected = priceOptions[Number(e.target.value)];
        setPriceRange([selected.from, selected.to]);
    };

    return (
        <div className={styles.filtersContainer}>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="All" selected>All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>

            <div>
                <select onChange={handlePriceChange}>
                    {priceOptions.map((option, index) => (
                        <option key={index} value={index}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                    <option value={0}>All Ratings</option>
                    <option value={4}>4 Stars & above</option>
                    <option value={3}>3 Stars & above</option>
                    <option value={2}>2 Stars & above</option>
                    <option value={1}>1 Stars & above</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
