import React, { useState } from "react";
import styles from "./SearchBar.module.css"; // optional CSS

const SearchBar = ({ onSearch }) => {
    const [searchText, setSearchText] = useState("");

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => {
                    const value = e.target.value;
                    setSearchText(value);
                    onSearch(value.trim());
                }}
                className={styles.searchInput}
            />
        </div>
    );
};

export default SearchBar;
