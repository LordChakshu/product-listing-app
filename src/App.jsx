import './App.css'
import { FavouritesProvider } from './context/FavouritesContext'
import Home from './pages/home/home'

function App() {

  return (
    <>
      <FavouritesProvider>
        <Home />
      </FavouritesProvider>
    </>
  )
}

export default App
