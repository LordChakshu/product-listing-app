import { lazy, Suspense, useState } from 'react';
import './App.css'
import { FavouritesProvider } from './context/FavouritesContext'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import ProductList from './components/ProductList/productList'

const Favourites = lazy(() => import("../src/components/Favourites/Favourites"));

function App() {

  const [allProducts, setAllProducts] = useState([]); //lifting state up(single source of truth)
  const location = useLocation(); // for finding active tab 

  return (
    <>
      <FavouritesProvider>
        <nav className="nav-tabs">
          <Link to="/" className={`tab-link ${location.pathname === "/" ? "active" : ""}`}>Products</Link>
          <Link to="/favourites" className={`tab-link ${location.pathname === "/favourites" ? "active" : ""}`}>Favourites</Link>
        </nav>

        <Suspense fallback={<div className='loading'>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList onProductsLoad={setAllProducts}/>} />
            <Route path="/favourites" element={<Favourites allProducts={allProducts}/>} />
          </Routes>
        </Suspense>
      </FavouritesProvider>
    </>
  )
}

export default App
