import { lazy, Suspense } from 'react';
import './App.css'
import { FavouritesProvider } from './context/FavouritesContext'
import { Link, Route, BrowserRouter , Routes } from 'react-router-dom';
import ProductList from './components/ProductList/productList'

const Favourites = lazy(() => import("../src/components/Favourites/Favourites"));

function App() {

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
            <Route path="/" element={<ProductList />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Suspense>
      </BrowserRouter >
      </FavouritesProvider>
    </>
  )
}

export default App
