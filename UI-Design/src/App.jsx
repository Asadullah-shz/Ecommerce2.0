import React from "react";
import Navbar from "./components/head/navbar.jsx";
import Alert from "./components/head/alert.jsx";
import Section from "./components/hero/section.jsx";
import Products from "./components/products/products.jsx";
import Categories from "./components/categories.jsx";


const App = () => {
  return (
    <div className="w-full  ">
      <Alert />
      <Navbar />
      <Section />
      <Products />
      <Categories />
    </div>
  );
};

export default App;
