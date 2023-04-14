import React from 'react';
import { BiLink } from 'react-icons/bi'

const PostContent = () => {
  return (
    <div className='pl-9 md:pr-20 py-3'>
      <h3 className='font-medium text-sm md:text-base mb-4'>See you at our event later tonight! Bellow link to our venue.</h3>
      <a href="https://elephantus.com/" className='text-blue-400 border-b-[1px]
          border-blue-400 font-semibold text-sm'>https://elephantus.com/</a>
      <div className="border-[1px] border-boClr py-3 px-5 rounded-ROne mt-4">
        <h3 className="font-semibold text-lg md:text-xl">Happy Shack</h3>
        <p className="text-seven font-medium text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis modi...</p>
        <div className='flex gap-5 items-center mt-5'>
          <div className="p-2 md:p-3 bg-four rounded-ROne ">
            <BiLink className='text-2xl text-three' />
          </div>
          <a href="https://www.happyshack.com.au/" className='text-blue-400 border-b-[1px]
          border-blue-400 font-semibold text-xs md:text-sm'>https://www.happyshack.com.au/</a>
        </div>
        <div className='my-3 h-52'>
          <img src="assets/pexels-quang-nguyen-vinh-2159065.jpg" alt="" className='rounded-ROne object-cover w-full h-full'/>
        </div>
      </div>
    </div>
  )
}

export default PostContent