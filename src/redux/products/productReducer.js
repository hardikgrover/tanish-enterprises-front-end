import {
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    ADD_TO_CART
  } from './productActionTypes';
  
  const initialState = {
    loading: true,
    products: [],
    error: '',
    cart:[]
  }
  
  const productReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: action.payload,
          error: ''
        }
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          products: [],
          error: action.payload
        }
      case ADD_TO_CART:
        return{
          ...state,
          cart:[...state.cart,action.payload]
        }
      default:
        return state
    }
  }
  
  export default productReducer;
  