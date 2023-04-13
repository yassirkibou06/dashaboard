import React from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiEmojiHappy, HiChat } from 'react-icons/hi'
import PostContent from './PostContent';

const Post = () => {
    return (
        <div>
            <div className='pr-16 py-7 border-b-2 border-boClr'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src="/assets/Oval.png" alt="" className='w-10' />
                        <div className='flex gap-2'>
                            <h2 className='font-semibold text-base'>Kate Bush</h2>
                            <li className='text-tClr font-semibold'>1h</li>
                        </div>
                    </div>
                    <FiMoreHorizontal className='text-tClr text-3xl cursor-pointer hover:text-three duration-700' />
                </div>
                <PostContent />
                <div className='px-9 my-4 text-tClr flex items-center gap-4'>
                    <HiChat className='text-2xl cursor-pointer' />
                    <HiEmojiHappy className='text-2xl cursor-pointer' />
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="/assets/face-with-heart.svg" alt="" className='w-6' />
                        <span className='font-semibold'>1</span>
                    </div>
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="/assets/face-with-sunglasses-.svg" alt="" className='w-6' />
                        <span className='font-semibold'>3</span>
                    </div>
                </div>
            </div>
            <div className='pr-16 py-7 border-b-2 border-boClr'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src="/assets/Oval2.png" alt="" className='w-10' />
                        <div className='flex gap-2'>
                            <h2 className='font-semibold text-base'>Mike Roth</h2>
                            <li className='text-tClr font-semibold'>1h</li>
                        </div>
                    </div>
                    <FiMoreHorizontal className='text-tClr text-3xl cursor-pointer hover:text-three duration-700' />
                </div>
                <div className='pl-9 md:pr-20 pt-3'>
                    <h3 className='font-medium text-sm md:text-base mb-4'>
                        See you at our event later tonight! Bellow link to our venue Lorem ipsum
                        dolor sit amet consectetur,
                        adipisicing elit. Possimus, illum! Ad amet, dicta recusandae dignissimos a accusamus repudiandae deleniti ullam provident.
                    </h3>
                </div>
                <div className='px-9 my-4 text-tClr flex items-center gap-4'>
                    <HiChat className='text-2xl cursor-pointer' />
                    <HiEmojiHappy className='text-2xl cursor-pointer' />
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="/assets/face-with-heart.svg" alt="" className='w-6' />
                        <span className='font-semibold'>1</span>
                    </div>
                </div>
                <div className='px-9 flex items-center gap-6'>
                    <div className='flex'>
                        <img src="/assets/Oval.png" alt="" className='w-8' />
                        <img src="/assets/Oval1.png" alt="" className='w-8' />
                        <img src="/assets/Oval2.png" alt="" className='w-8' />
                    </div>
                    <div>
                        <h4 className='text-blue-400 cursor-pointer'>Show Replies (4)</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post