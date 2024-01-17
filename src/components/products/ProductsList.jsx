import React, { Fragment, useEffect, useState } from "react";
import ProductItems from "./ProductItems";
import axios from "axios";
import ProductsListSkeleton from "../utils/ProductsListSkeleton";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

const ProductsList = ({limit}) => {
  const [products, setProducts] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSeacthTerms, setDebouncedSeacthTerms] = useState('')
  const [originalProduct, setOriginalProduct] = useState([])
  const searchRef = useRef()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        SetLoading(true);
        const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}`);

        setProducts(data.products);
        setOriginalProduct(data.products)
        SetLoading(false);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);

  useEffect(()=>{
    const timerId = setTimeout(() =>{
      setDebouncedSeacthTerms(searchTerm)
    }, 500)

    return ()=>{
      clearTimeout(timerId)
    }

  }, [searchTerm])

  useEffect(()=>{
    if(debouncedSeacthTerms){
       const fetchProduct = async () => {

      try {
        SetLoading(true)
        const {data} = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
        setProducts(data.products);
        SetLoading(false);
        console.log(products)
      }catch (error) {
        console.error(error)
      }
    }
    fetchProduct();
    }else {
      setProducts(originalProduct)
    }
   
  },[debouncedSeacthTerms])

  useRef(()=>{

    if(searchRef){
      searchRef.current.focus()
    }
  },[products] )

  if (loading) return <ProductsListSkeleton />

  return (
    
    <Fragment>
     
     <div className='relative mt-3'>
        <input onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm} useRef={searchRef} type="text" placeholder='Search for product' className='p-2 pl-10 border rounded shadow w-full focus:outline-none focus:border-pink-300'/>
        <span className='absolute left-3 top-1/2 transform -translate-y-1/2'>
        <CiSearch className='w-6 h-6 text-pink-600'/>
        </span>
      </div>

    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {products.map((product) => (
        <ProductItems key={product.id} product={product} />
      ))}
      </div>
    </Fragment>
  );
};

export default ProductsList;
