import axios from 'axios';
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE 
} from './productActionTypes';

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFailure = error => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest())
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const products = response.data.slice(0, 3)
        dispatch(fetchProductsSuccess(products))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchProductsFailure(errorMsg))
      })
  }
}

export const addToCart = (product)=>{
  return{
    type:'ADD_TO_CART',
    payload: product
  }
}
