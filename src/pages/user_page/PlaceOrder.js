import React from 'react'
import { useNavigate } from 'react-router';


// placeOrder

const PlaceOrder = () => {
  const nav = useNavigate();

  return (
    <div className='grid grid-cols-3 px-5 justify-items-center mt-[2%] items-center'>
      <div className='col-span-2 space-y-3'>
        <div className='border-b-2 border-b-gray-400 border-spacing-2'>
          <h1 className='text-Xl text-gray-700 font-bold'>SHIPPING ADDRESS</h1>
          <p>Lalitpur, kathmandu</p>
        </div>

        <div className='space-y-4'>

          <h1 className='text-Xl text-gray-700 font-bold'>ORDER ITEMS</h1>

          <div className='grid grid-cols-5 gap-4 items-center'>
            <img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <h1>AirPods Wireless Bluetooth HeadPhoness</h1>
            <p className='col-span-2'>3 x Rs.9000 = Rs.27000</p>

          </div>
        </div>




      </div>

      <div className='border-1 border-gray-700  space-y-3 '>
        <h1 className='text-xl text-gray-600 font-semibold'>ORDER SUMMARY</h1>
        <p>Total Rs.27000</p>
        <button onClick={() => nav('/order/5f4579992699')} className='ring-2 bg-black text-white px-3 py-[5px]'>Place  Order</button>
      </div>

    </div>
  )
}

export default PlaceOrder
