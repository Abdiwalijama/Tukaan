import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsSkeleton from '../components/utils/ProductDetailsSkeleton'
import { ShopContext } from '../context/ShopContext'


const ProductDetails = () => {

  const {addToCart, products, total} = useContext(ShopContext)
  console.log(products)

const navigate = useNavigate()
 const [product, setProduct]=useState([])
 const [mainImage, setMainImage] = useState()
 const {id} =useParams()
 console.log(id)
  
  useEffect(() =>{
    const fetchProduct = async()=> {
      try{
        const {data} = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(data)
        setMainImage(data.thumbnail)
      }catch(e){
        console.error(e)
      }
    }
    fetchProduct()
  },[id])

  if(!product) return <div><ProductDetailsSkeleton/></div>
  return (
    <div className='p-4 md:p-8 '>
      <button 
      onClick={()=>navigate("/")}
      className='mb-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition-colors duration-200'>← Go Back</button>
      <h1 className='text-3xl font-semibold mb-6'>{product.title}</h1>
     <div className='md:flex'>
     <div className='md:w-1/2 pr-4 mb-6 md:mb-0'>
        <img
         className='w-full h-96 object-cover rounded-lg shadow-md' src={mainImage} alt={product.title}/>
        <div className='flex mt-4 space-x-2 overflow-x-auto'>
          {product.images?.map((image, idx)=>{
            return (
              <img
              onClick={()=>setMainImage(image)}
              key={idx}
              src={image}
              alt={product.title}
              className='w-24 h-24 object-cover rounded-lg shadow cursor-pointer'
              />
            )
          })}
        </div>
      </div>
      <div className='md:w-1/2 pl-4'>
        <p className='text-gray-600 mb-4'>{product.description}</p>
        <div className='flex mb-4 justify-between items-center'>
          <span className='text-pink-600 font-semibold text-2xl'>${product.price}</span>
          <span className='text-sm text-gray-500'>{product.stock > 0 ? `${product.stock} in stock`: 'out of stock'}</span>
          
        </div>
        <div className='mb-4'>
          <span className='text-yellow-500'>
            {'★'.repeat(Math.round(product.rating))}
          </span>
          <span>{'☆'.repeat(Math.round(5- product.rating))}</span>
        </div>
        <button 

        onClick={()=>addToCart(product)}
        className='bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-900 transition-colors duration-200'>Add to Cart</button>
      </div>
     </div>
    </div>
  )
}

export default ProductDetails