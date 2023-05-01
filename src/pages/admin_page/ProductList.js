import React from 'react'
import { useNavigate } from 'react-router'

const ProductList = () => {
  const nav = useNavigate();
  return (

    <div className='p-10 grid grid-cols-3 '>
      <div className='col-span-2'>
        <h1 className='text-2xl tracking-wide   font-bold'>Products Lists</h1>

        <div className='grid grid-cols-5 mt-9 gap-10 items-center '>
          <img src="https://images.unsplash.com/photo-1682364284611-b3201041f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p>Airpods</p>
          <p>Rs.900</p>
          <p>Brand</p>
          <div className='flex space-x-7'>
            <button><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            <button><i className="fa-solid fa-trash fa-lg"></i></button>
          </div>
        </div>


      </div>
      <div className='justify-self-end '>
        <button onClick={() => nav('/product_add')} className='bg-black text-white px-5 py-1'>Add Product</button>
      </div>



    </div>

  )
}

export default ProductList
