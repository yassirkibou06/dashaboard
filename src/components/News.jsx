import React from 'react';
import { RiMiniProgramFill,RiSearchLine } from 'react-icons/ri'
import Share from './Share';

const News = () => {
  return (
    <div className='pt-5 md:pt-7'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-xl md:text-2xl'>News feed</h2>
            <div className='flex items-center gap-3'>
                <div className='p-4 bg-four rounded-ROne'>
                <RiMiniProgramFill size={20} className='text-three' />
                </div>
                <div>
                    <h3 className='text-sm md:text-base font-semibold'>Prograils</h3>
                    <h5 className='text-xs md:text-sm font-medium text-tClr'>40 employees</h5>
                </div>
            </div>
        </div>
        <div className='text-tClr font-medium flex gap-4 items-center my-6 p-2 border-[2px] border-boClr rounded-ROne'>
        <RiSearchLine size={20} className="cursor-pointer" />
        <input type="search" placeholder='Search feed...' className='focus:outline-none w-full' />
        </div>
        <Share />
    </div>
  )
}

export default News