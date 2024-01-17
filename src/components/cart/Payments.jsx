import React from 'react'
import useShop from '../../context/ShopContext'

const Payments = () => {
  const {total} = useShop()
  return (
    <div className='lg:w-1/3'>
      <div className='border p-4 rounded-lg'>
        <h2 className='text-2xl font-semibold mb-4'>Chose your payment methods</h2>
        <div className='space-y-1'>
          <label className='flex items-center space-x-2'>
          <input className='text-pink-600' name='payment' type="radio" />
          <span>Cash on Delivery</span>
          </label>
          <label className='flex items-center space-x-2'>
          <input className='text-pink-600' name='payment' type="radio" />
          <span>Card payment</span>
          </label>
        </div>
        <div className='mt-6 border-t pt-6'>
          <div className='flex justify-between items-center mb-4'>
            <span className='text-2xl font-semibold text-pink-600'>Total</span>
            <span className='text-2xl font-semibold text-pink-600'>{total}</span>
          </div>
        </div>
        <div className='mt-6'>
          <button className='w-full bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-700'>Proceed to checkout</button>
        </div>
      </div>

    </div>
  )
}

export default Payments