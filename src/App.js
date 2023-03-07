import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import Error from "./Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'
import { useFeaturedData } from "./context/productContext";


const App = () => {
  const { progress, setProgress } = useFeaturedData();

  return (<>
    <Navbar />
    <LoadingBar
      color="#7927b4"
      progress={progress}
      waitingTime={500}
      onLoaderFinished={() => setProgress(0)}
    />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </>)
};

export default App;
