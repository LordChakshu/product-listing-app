import React from "react";
import ProductList from "../../components/ProductList/productList";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Product List</h2>
      <ProductList />
    </div>
  );
};

export default Home;
