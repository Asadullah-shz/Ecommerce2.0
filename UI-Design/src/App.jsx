import Navbar from "./components/head/navbar.jsx";
import Alert from "./components/head/alert.jsx";
import Section from "./components/hero/section.jsx";
import Products from "./components/products.jsx";
import Categories from "./components/categories.jsx";
import Bestselling from "./components/bsts.jsx";
import Services from "./components/reusable/services.jsx";
import Footer from "./components/footer.jsx"
import Divider from "./components/reusable/divider.jsx"

const App = () => {
  return (
    <div className="w-full  ">
      <Alert />
      <Navbar />
      <Section />
      <Products />
      <Divider />
      <Categories />
      <Divider />
      <Bestselling />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
