import React, { useEffect } from "react";
import Product from "./Product";
import "../css/ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import {  fetchProducts } from "../redux/products/productActions";


function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // async function fetchProducts() {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response.data.slice(0, 3));
    //     console.log("response", products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
