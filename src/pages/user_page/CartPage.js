import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Image, Shimmer } from 'react-shimmer'
import { baseUrl } from '../../constants/constants';
import { updateCart } from '../../features/userSlice';
// cartpage

const CartPage = () => {
  const nav = useNavigate();
  const { carts, user } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const total = carts.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className='grid grid-cols-3 px-5 justify-items-center mt-[2%] items-center'>

      <div className='col-span-2 space-y-3'>
        <h1 className='text-2xl text-gray-700 font-bold'>SHOPPING CART</h1>

        {carts.map((cart) => {
          return <div className='grid grid-cols-5 gap-4 items-center' key={cart.product}>
            <Image
              src={`${baseUrl}${cart.product_image}`}
              fallback={<Shimmer height={300} width={400} duration={4} />}
            />


            <h1>{cart.name}</h1>
            <p>Rs.{cart.price}</p>

            <select defaultValue={cart.qty} onChange={(e) => {


              dispatch(updateCart({

                name: cart.name,
                qty: e.target.value,
                image: cart.image,
                totalPrice: cart.price * e.target.value,
                price: cart.price,
                product: cart.product,
                stock: cart.stock



              }));

            }


            }


              name="select" id="select" className='w-14 px-4 py-1'>
              {[...Array(Number(cart.stock)).keys()].map((x) => {
                return <option value={x + 1} key={x}>{x + 1}</option>
              })}
            </select>
            <div>
              <button><i className="fa-solid fa-trash"></i></button>
            </div>

          </div>

        })}



      </div>

      <div className='border-1 border-gray-700  space-y-3 pb-5'>
        <h1 className='text-xl text-gray-600 font-semibold'>SUB TOTAL</h1>
        <p>Rs.{total}</p>
        <button onClick={() => user.shippingAddress.isEmpty ? nav('/user/shipping') : nav('/user/placeorder')} className='ring-2 bg-black text-white px-3 py-[5px]'>Proceed To CheckOut</button>
      </div>

    </div>
  )
}

export default CartPage
