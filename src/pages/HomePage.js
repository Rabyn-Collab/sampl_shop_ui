import React from 'react'

import CardShow from '../components/CardShow';

const HomePage = () => {
  const product = {
    _id: '644c63bf68b3c792b9ffc2c4',
    product_name: "beauty product",
    product_detail: "During the early stages of shampoo in Europe, English hair stylists bo…",
    product_price: 9000,
    rating: 0,
    numReviews: 0,
    product_image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0eXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    brand: "shampoo",
    category: "beauty products",
    countInStock: 5,
    reviews: []
  };


  return (
    <div className='grid grid-cols-4 p-5'>
      <CardShow product={product} />
    </div>
  )
}

export default HomePage
