import { lazy, Suspense, useState } from 'react';
import './App.css'
import { FavouritesProvider } from './context/FavouritesContext'
import { Link, Route, BrowserRouter , Routes } from 'react-router-dom';
import ProductList from './components/ProductList/productList'

const Favourites = lazy(() => import("../src/components/Favourites/Favourites"));

function App() {

  const [allProducts, setAllProducts] = useState([]); //lifting state up(single source of truth)

  return (
    <>
      <FavouritesProvider>
        <BrowserRouter >
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Products</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList onProductsLoad={setAllProducts}/>} />
            <Route path="/favourites" element={<Favourites allProducts={allProducts}/>} />
          </Routes>
        </Suspense>
      </BrowserRouter >
      </FavouritesProvider>
    </>
  )
}

export default App
