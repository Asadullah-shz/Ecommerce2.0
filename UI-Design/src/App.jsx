import React from "react";
import Navbar from "./components/head/navbar.jsx";
import Alert from "./components/head/alert.jsx";
import Section from "./components/hero/section.jsx";
import Products from "./components/products.jsx";
import Categories from "./components/categories.jsx";
import Bestselling from "./components/bsts.jsx"


const App = () => {
  return (
    <div className="w-full  ">
      <Alert />
      <Navbar />
      <Section />
      <Products />
      <Categories />
      <Bestselling />

    </div>
  );
};

export default App;
