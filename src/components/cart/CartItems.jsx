import React from 'react'
import { MdDelete } from "react-icons/md";
import Payments from './Payments';
import useShop from '../../context/ShopContext';




const CartItems = () => {
  
  const {products, removeFromCart, updatedProductQuantity}=useShop()
 
      
  return (

    <div className='flex flex-col lg:flex-row p-4 lg:p-8 space-y-6 lg:space-y-0 lg:space-x-6'> 

    <div className='flex-1 '>
      <h2 className='text-2xl font-semibold mb-4'>{products.length > 0 ? 'Your cart items': 'Your cart is empty now please go a head and add some items'}</h2>

      {products.map(product =>(
        <div className='flex items-start space-x-4 mb-6'>
          <img className='w-24 h-24 object-cover rounded-lg' src={product.thumbnail} alt={product.title} />
          <div className='flex flex-col justify-between flex-1'>
            <h3 className='text-lg font-semibold'>{product.title}</h3>
            <p className='text-sm text-gray-500'>{product.description}</p>
            <div className='flex items-center justify-between mt-2'>
              <div className='flex items-center space-x-2'>
                <span className='text-lg text-pink-600 font-semibold'>$   {product.price}</span>
                <div className='flex items-center space-x-2'>
                  <label className='text-sm font-semibold'>Quantity</label>
                  <input type="number" onChange={(e)=>updatedProductQuantity(product, e.target.value)} defaultValue={product.Quantity} className='w-16 border-gray-200 rounded-md p-2 text-center'/>
                </div>
              </div>
              <button
              onClick={()=>removeFromCart(product)}
               className='text-red-500 hover:to-red-700 transition-colors duration-200 ease-in-out'>
            <MdDelete />
            </button>
            </div>
            
          </div>
        </div>
      ))}

    </div>
    <Payments/>
    </div>
  
  )
}

export default CartItems