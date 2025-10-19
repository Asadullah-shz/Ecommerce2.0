import React from "react";
import Navbar from "./components/navbar.jsx";
import Alert from "./components/alert.jsx";
import Section from "./components/section.jsx";
import Products from "./components/products.jsx";
import Buttons from './components/buttons.jsx'

const App = () => {
  return (
    <div className="w-full h-screen  ">
      <Alert />
      <Navbar />
      <Section />
      <Products />
    </div>
  );
};

export default App;
