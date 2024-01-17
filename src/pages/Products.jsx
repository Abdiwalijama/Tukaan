import React, { Fragment } from 'react'
import ProductsList from '../components/products/ProductsList'


const Products = () => {
  return (
    <div className="mt-12">
      <h1 className="text-pink-600 text-2xl text-center mt-5">All of the Products</h1>
     
      <ProductsList limit={100} />
      </div>
  )
}

export default Products