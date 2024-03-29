import React from 'react'
import { Link } from 'react-router-dom'
const ProductItems = ({product}) => {
  return (
    <Link to={`/product-details/${product.id}`} className='boder shadow-md hover:shadow-lg transition-shadow duration-200 ease-in '>
    <img className='w-full h-48 object-cover' src={product.thumbnail} alt="product.name" /><div className='p-4'>
      <h2 className='font-bold text-xl mb-2'>{product.title}</h2>
      <p className='text-gray-600 mb-4 truncate'>{product.description}</p>

      <div className='flex justify-between items-center'>
        <span className='text-blue-600 font-semibold'>${product.price.toFixed()}</span>
        <div className='text-sm text-gray-500' > 
          {product.stock > 0 ? `${product.stock} in stock` : "out of stock"}
        </div>
       
      </div> 
      <div className='mt-4'>
          <span className='text-yellow-500'>
            {'★'.repeat(Math.round(product.rating))}
          </span>
          <span>{'☆'.repeat(Math.round(5- product.rating))}</span>
          
        </div>
    </div>
    
    </Link>
    
  )
}

export default ProductItems