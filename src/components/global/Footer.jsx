import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='py-4 border-t   bottom-0 left-0 right-0 bg-gray-500 bg-opacity-60 backdrop-blur-md shadow z-10  '>
      <div className='max-w-4xl mx-auto text-center items-center '>
        <p className='text-gray-600'>Thanks for visiting our website</p>
      <p className='text-gra-900 font-semibold'>Iibso.com &copy;{currentYear} </p>
      </div>
      
    </div>
  )
}

export default Footer