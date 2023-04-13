import React from 'react';
import { IoIosPaperPlane } from 'react-icons/io';
import { HiOutlinePaperClip,HiEmojiHappy,HiPhotograph } from 'react-icons/hi'

const Share = () => {
  return (
    <div className='bg-four p-4 rounded-ROne'>
        <input type="text" placeholder='Share your news...' className='bg-four 
        focus:outline-none w-full mb-5 font-medium text-xs md:text-sm ' />
        <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
                <HiEmojiHappy className='md:text-2xl text-tClr cursor-pointer'/>
                <HiPhotograph className='md:text-2xl text-tClr cursor-pointer'/>
                <HiOutlinePaperClip className='md:text-2xl text-tClr cursor-pointer'/>
            </div>
            <div className='hover:bg-two duration-700 w-10 h-10 rounded-full 
            flex items-center justify-center pr-1 cursor-pointer'>
                <IoIosPaperPlane className='md:text-2xl text-three'/>
            </div>
        </div>
    </div>
  )
}

export default Share