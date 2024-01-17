import React from 'react'
import ProductsList from '../components/products/ProductsList'

const Home = () => {
  return (
    <div className='mt-12'>
     <h1 className="text-pink-600 text-2xl text-center">Latst Products</h1>
    <ProductsList limit={9}/>
    </div>
  )
}

export default Home