import React from "react";
import "../css/Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/products/productActions";

function Product(props) {
  const { id, name, description, image ,price} = props.product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props.product));
  };

  return (
    <div key={id} className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
