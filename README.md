Project Overview

  This web app fetches product data from FakeStoreAPI and displays it in a clean and responsive layout. Users can:

  Browse all products

  Search products by name/title

  Sort products (by price or name)

  Favorite/unfavorite products

  View favorite products separately

Features Implemented ✅

Core Features (Mandatory)

  Feature Status
  Display Items in table/grid format ✅ Completed
  Search products by title or name ✅ Completed
  Sorting (Price, category, star rating) ✅ Completed
  Favorite/Like functionality ✅ Completed
  Favorites View / Section ✅ Completed


Bonus Features (Optional)

Feature Status
  404 page for routing 
  Routing (React Router) ✅ Completed
  Responsive Design ✅ Completed (Mobile Optimized Partially)

Tech Stack

->Framework: React (Functional Components + Hooks)

->Language: JavaScript (or TypeScript if using TS)

->State Management: Context API

->Styling: CSS Modules

->API: FakeStoreAPI

->Tools: Vite / Create React App

->Folder Structure
src/
│
├─ api/
│ └─ fetchProducts.js # API call function
├─ components/
│ ├─ ProductCard/ # Product card component
│ ├─ ProductList/ # Product listing & search
│ ├─ Filters
| |- Favourites
│ ├─ SearchBar/ # Search input component
├─ context/
│ └─ FavouritesContext.js # Context API for favorites
├─ assets/ # Images/icons
├─ App.js
├─ index.js
└─ styles/
└─ CSS module files

Getting Started

Prerequisites

Node.js >= 18.x

npm >= 9.x or yarn >= 1.x

Clone the Repository

git clone https://github.com/yourusername/product-listing-app.git
cd product-listing-app

Install Dependencies
npm install

Run the Application
npm run dev

How It Works

Fetching Products:

Products are fetched from FakeStoreAPI using fetchProducts() API helper.

Search Functionality:

Users can type in the search bar to filter products by title dynamically.

Sorting:

Products can be filter by price or star rating using the sort dropdown.

Favorite Products:

Users can toggle favorites using a heart button on each product card.

Favorite products are stored using Context API and displayed in a separate favorites view.
