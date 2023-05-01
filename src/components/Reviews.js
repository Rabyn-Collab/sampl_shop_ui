import React from 'react'
import { Textarea } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";


const Reviews = () => {



  return (
    <div className='p-4 space-y-7 py-11'>
      <h1>REVIEWS</h1>
      <form >
        <div className='pl-4 space-y-5'>
          <h1>WRITE A CUSTOMER REVIEW</h1>
          <div className="w-44 space-y-2">
            <p>Rating</p>
            <Select

              label="Select" name='rating'>
              <Option value='1'>Poor</Option>
              <Option value='2'>Fair</Option>
              <Option value='3'>Good</Option>
              <Option value='4'>Very Good</Option>
              <Option value='5'>Excellent</Option>
            </Select>


          </div>

          <h2>Comment</h2>


          <div className="w-96 space-y-5">
            <Textarea
              name='comment'
              id='comment'

              label="Message" />

            <button type='submit' className='text-center bg-black text-white py-1 px-4 rounded'>Submit</button>
          </div>



        </div>

      </form>

    </div>
  )
}

export default Reviews