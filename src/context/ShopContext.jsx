import { createContext, useContext, useEffect } from "react";
import { REDUCER_ACTION_TYPE, initialState, shopReducer } from "./shopReduser";
import { useReducer } from "react";

export const ShopContext = createContext(initialState)



export const ShopProvider = ({children})=>{

  const [state, dispatch]= useReducer(shopReducer, initialState)

  useEffect(()=>{
    localStorage.setItem('shop_cart',  JSON.stringify({ products:state.products,total:state.total}))
  }, [state])
const calculateTotalPrice =(products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.Quantity
  })
  dispatch({
    type:REDUCER_ACTION_TYPE.CALCULATE_TOTAL_PRICES, 
    payload:{total}
  })
}
  const addToCart =(product)=>{
    const productIndex = state.products.findIndex((pro)=>pro.id === product.id)
    let updatedProduct = [...state.products]
    if (productIndex === -1) {
      updatedProduct=[
        ...updatedProduct,
        {
          ...product,
          Quantity:1
        }
      ]
    }else{
      updatedProduct[productIndex]={
        ...updatedProduct[productIndex],
        Quantity: updatedProduct[productIndex].Quantity + 1
    }

     } 
     calculateTotalPrice(updatedProduct)

 
  dispatch({
    type:REDUCER_ACTION_TYPE.ADD_TO_CART,
    payload:{
      products:updatedProduct
    }
  })
   }
   const removeFromCart =(product)=>{
    const updatedProduct = state.products.filter((pro)=>pro.id !== product.id)
    calculateTotalPrice(updatedProduct)

    dispatch({
      type:REDUCER_ACTION_TYPE.REMOVE_FROM_CART,
      payload:{
        products:updatedProduct
      }
    })
   }

   const updatedProductQuantity =(product, newQuantity) =>{
    const productIndex = state.products.findIndex((pro)=>pro.id === product.id)

    let updatedProduct = [...state.products]
    if(newQuantity <= 0){
      updatedProduct = updatedProduct.filter((pro)=>pro.id !== product.id)
    }else{
      updatedProduct[productIndex]={
      ...updatedProduct[productIndex],
      Quantity:newQuantity
    }
    }
    calculateTotalPrice(updatedProduct)

    dispatch({
      type:REDUCER_ACTION_TYPE.UPDATE_PRODUCT_QUANTITY,
      payload:{
        products:updatedProduct
      }
    })
   }


  const value = {
    products:state.products, 
    total: state.total,
    addToCart,
    removeFromCart,
    updatedProductQuantity
   
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>



}

const useShop =()=>{
  const context = useContext(ShopContext)

  if(context === undefined){
    throw new Error('shopContext must be defined shopProvider')
  } 
  return context
}

export default useShop