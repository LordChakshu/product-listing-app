import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import ProductCard from "../ProductCard/productCard";
import styles from "./ProductList.module.css";
import SearchBar from "../SearchBar/searchBar";

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts,setFilteredProducts]=useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setAllProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    getProducts();
  }, []);

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
