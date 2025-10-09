🛍️ Product Listing Web App

A sleek, responsive React application that fetches products from FakeStoreAPI and provides an interactive browsing experience — including search, sorting, favorites, and routing.

Built with modern React practices — Context API, and modular CSS styling.

# 🛍️ Product Listing Web App

A sleek and responsive **React application** that fetches products from [FakeStoreAPI](https://fakestoreapi.com/) and allows users to browse, search, sort, and favorite products — all in an elegant, modular UI.

Built with **modern React practices (Hooks + Context API)** and **CSS Modules** for maintainable styling.

---

## ✨ Features Overview

### 🧩 Core Functionality
| Feature | Status | Description |
|----------|---------|-------------|
| 🖼️ **Product Display** | ✅ | Displays all products in a clean, responsive grid layout |
| 🔍 **Search Products** | ✅ | Search dynamically by product title or name |
| ↕️ **Sorting** | ✅ | Sort by **price**, **star rating** |
| ❤️ **Favorite Products** | ✅ | Add/remove favorites using a heart icon |
| 💾 **Favorites View** | ✅ | View your favorite items on a separate page |

---

### 🌟 Bonus Features
| Feature | Status | Description |
|----------|---------|-------------|
| 🚫 **404 Page** | ✅ | Shown when a user visits an invalid route |
| 🔄 **Routing** | ✅ | Implemented using **React Router** |
| 📱 **Responsive Design** | ✅ (Partially Mobile Optimized) | Works smoothly on most devices |

---

## 🧠 Tech Stack

| Category | Tools / Libraries |
|-----------|-------------------|
| 🧩 **Framework** | React |
| 💬 **Language** | JavaScript|
| 🧠 **State Management** | Context API |
| 🎨 **Styling** | CSS Modules |
| 🌐 **API Source** | [FakeStoreAPI](https://fakestoreapi.com/) |
| ⚙️ **Build Tool** | Vite / Create React App |

---

⚙️ Build Tool	Vite / Create React App
🏗️ Folder Structure
src/
│
├─ api/
│   └─ fetchProducts.js           # API call function
│
├─ components/
│   ├─ ProductCard/               # Product card component
│   ├─ ProductList/               # Product listing + sorting + search
│   ├─ Filters/                   # Sorting / filtering options
│   ├─ Favourites/                # Favourites view
│   └─ SearchBar/                 # Search input component
│
├─ context/
│   └─ FavouritesContext.js       # Context API for managing favorites
│
├─ assets/                        # Icons and images
│
├─ App.js                         # Root component
├─ index.js                       # React DOM entry point
└─ styles/                        # CSS module files

⚙️ Getting Started
📋 Prerequisites

Ensure you have the following installed:

Node.js ≥ 18.x

npm ≥ 9.x (or yarn ≥ 1.x)

🚀 Setup Instructions
# Clone the repository
git clone https://github.com/yourusername/product-listing-app.git
cd product-listing-app

# Install dependencies
npm install

# Start the development server
npm run dev


Now visit http://localhost:5173
 (if using Vite) and enjoy 🎉
