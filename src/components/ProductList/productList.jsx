import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import ProductCard from "../ProductCard/productCard";
import styles from "./ProductList.module.css";
import SearchBar from "../SearchBar/searchBar";
import SortOptions from "../Filters/Filters"

const ProductList = ({ allProducts, setAllProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [ratingSort, setRatingSort] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      if (allProducts.length === 0) {
        const data = await fetchProducts();
        setAllProducts(data);
      }
      setLoading(false);
    };
    getProducts();
  }, [allProducts, setAllProducts]);

  useEffect(() => {
    let updated = [...allProducts];

    if (searchQuery.trim() !== "") {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceSort) {
      updated.sort((a, b) =>
        priceSort === "price-asc" ? a.price - b.price : b.price - a.price
      );
    } else if (ratingSort) {
      updated.sort((a, b) =>
        ratingSort === "rating-asc"
          ? a.rating.rate - b.rating.rate
          : b.rating.rate - a.rating.rate
      );
    }

    setFilteredProducts(updated);
  }, [searchQuery, priceSort, ratingSort, allProducts]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setPriceSort("");
      setRatingSort("");
    }
  };

  const handlePriceSortChange = (value) => {
    setPriceSort(value);
    if (value) setRatingSort("");
  };

  const handleRatingSortChange = (value) => {
    setRatingSort(value);
    if (value) setPriceSort("");
  };

  if (loading) return <p className={styles.loading}>Loading...</p>

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className={styles.filter}>
        <SortOptions
          onPriceSortChange={handlePriceSortChange}
          onRatingSortChange={handleRatingSortChange}
          priceSort={priceSort}
          ratingSort={ratingSort}
        />
      </div>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
