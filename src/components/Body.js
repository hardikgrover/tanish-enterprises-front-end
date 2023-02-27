import React from "react";
import "../css/Body.css";
import ProductList from "./ProductList";

const Body = (props) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of product 1",
      image: "product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      image: "product2.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      image: "product2.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of product 2",
      image: "product2.jpg",
    },
    // Add more products as necessary
  ];

  return (
    <div className="body">
      {/* <div>hey there</div> */}
      <ProductList products={products} />
    </div>
  );
};

export default Body;
