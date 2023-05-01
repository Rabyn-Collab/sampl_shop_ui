import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router';


// cartpage

const CartPage = () => {
  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      select: 0
    }
  });
  return (
    <div className='grid grid-cols-3 px-5 justify-items-center mt-[2%] items-center'>
      <div className='col-span-2 space-y-3'>
        <h1 className='text-2xl text-gray-700 font-bold'>SHOPPING CART</h1>

        <div className='grid grid-cols-5 gap-4 items-center'>
          <img src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <h1>AirPods Wireless Bluetooth HeadPhoness</h1>
          <p>Rs.9000</p>

          <select onChange={(e) => formik.setFieldValue('select', e.target.value)} name="select" id="select" className='w-14 px-4 py-1'>
            {[...Array(5).keys()].map((x) => {
              return <option value={x + 1} key={x}>{x + 1}</option>
            })}
          </select>
          <div>
            <button><i className="fa-solid fa-trash"></i></button>
          </div>

        </div>


      </div>

      <div className='border-1 border-gray-700  space-y-3 pb-5'>
        <h1 className='text-xl text-gray-600 font-semibold'>SUB TOTAL</h1>
        <p>Rs.9000</p>
        <button onClick={() => nav('/user/shipping')} className='ring-2 bg-black text-white px-3 py-[5px]'>Proceed To CheckOut</button>
      </div>

    </div>
  )
}

export default CartPage
