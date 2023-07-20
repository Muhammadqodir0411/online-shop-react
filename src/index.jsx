import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Counter from './components/Counter'
import ProductCard from './components/ProductCard'
import Header from "./components/Heder";
import './main.css'
import './index.css'

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <div className="container">
    <Header />
    <App />
    <Counter />
    <ProductCard />
    <counterReducer />
  </div>
);

reportWebVitals();
