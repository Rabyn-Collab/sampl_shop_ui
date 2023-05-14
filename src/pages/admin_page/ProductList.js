import React from 'react'
import { useNavigate } from 'react-router'
import { useGetAllProductsQuery } from '../../features/crud/crudApi';
import { Image, Shimmer } from 'react-shimmer'
import { baseUrl } from '../../constants/constants';

const ProductList = () => {
  const nav = useNavigate();
  const { isLoading, isError, error, data } = useGetAllProductsQuery();


  if (isLoading) {
    return <div className='h-[250px] w-[25%] mx-auto mt-[9%]'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_tmnc73b6.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>

  }


  return (

    <div >
      {data && data.map((product) => {
        return <div key={product._id} className='p-10 grid grid-cols-3 '>
          <div className='col-span-2'>
            <h1 className='text-2xl tracking-wide   font-bold'>Products Lists</h1>

            <div className='grid grid-cols-5 mt-9 gap-10 items-center '>
              <Image
                src={`${baseUrl}${product.product_image}`}
                fallback={<Shimmer height={100} width={150} duration={4} />}
              />
              <p>{product.product_name.substring(0, 10)}</p>
              <p>Rs.{product.product_price}</p>
              <p>{product.brand}</p>
              <div className='flex space-x-7'>
                <button onClick={() => nav(`/update/product/${product._id}`)}><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
                <button><i className="fa-solid fa-trash fa-lg"></i></button>
              </div>
            </div>


          </div>
          <div className='justify-self-end '>
            <button onClick={() => nav('/product_add')} className='bg-black text-white px-5 py-1'>Add Product</button>
          </div>


        </div>
      })}



    </div>

  )
}

export default ProductList
