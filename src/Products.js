import React from "react";
import { useFeaturedData } from "./context/productContext";

const Products = () => {
  const { featuredProducts } = useFeaturedData()
  console.log(featuredProducts)
  return <>
    products
  </>;
};

export default Products;
