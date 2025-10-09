import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import ProductCard from "../ProductCard/productCard";
import styles from "./ProductList.module.css";
import SearchBar from "../SearchBar/searchBar";
import Filters from "../Filters/Filters";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [loading, setLoading] = useState(true);

  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setAllProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

  useEffect(() => {
    let result = allProducts;

    // Category
    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    // Price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Rating
    if (rating > 0) {
      result = result.filter((p) => p.rating.rate >= rating);
    }

    setFilteredProducts(result);
  }, [allProducts, category, priceRange, rating]);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  if (loading) return <p className={styles.loading}>Loading...</p>

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Filters
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        rating={rating}
        setRating={setRating}
      />
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
