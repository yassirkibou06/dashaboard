import React from 'react';
import { HiEmojiHappy } from 'react-icons/hi'

const Joiners = () => {
    return (
        <div className='border-b-2 border-boClr mr-3'>
            <h2 className='font-semibold text-lg'>🧙‍♀️ New joiners</h2>
            <div className='mt-6'>
                <div className='box mb-6'>
                    <div className='flex items-center justify-between pr-4'>
                        <div className='flex gap-3'>
                            <img src="assets/Oval2.png" alt="" className='w-10' />
                            <div>
                                <h3 className='font-semibold'>Frank Loyed</h3>
                                <h4 className='text-tClr font-semibold text-sm'>Data Scientist</h4>
                            </div>
                        </div>
                        <HiEmojiHappy className='md:text-3xl text-tClr cursor-pointer' />
                    </div>
                    <div className='px-9 my-4 text-tClr flex items-center gap-4'>
                        <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                            <img src="assets/face-with-heart.svg" alt="" className='w-6' />
                            <span className='font-semibold'>1</span>
                        </div>
                        <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                            <img src="assets/face-with-sunglasses-.svg" alt="" className='w-6' />
                            <span className='font-semibold'>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='box mb-6'>
                <div className='flex items-center justify-between pr-4'>
                    <div className='flex gap-3'>
                        <img src="assets/Oval2.png" alt="" className='w-10' />
                        <div>
                            <h3 className='font-semibold'>Frank Loyed</h3>
                            <h4 className='text-tClr font-semibold text-sm'>Data Scientist</h4>
                        </div>
                    </div>
                    <HiEmojiHappy className='md:text-3xl text-tClr cursor-pointer' />
                </div>
                <div className='px-9 my-4 text-tClr flex items-center gap-4'>
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="assets/face-with-heart.svg" alt="" className='w-6' />
                        <span className='font-semibold'>1</span>
                    </div>
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="assets/face-with-sunglasses-.svg" alt="" className='w-6' />
                        <span className='font-semibold'>3</span>
                    </div>
                </div>
            </div>
            <div className='box mb-6'>
                <div className='flex items-center justify-between pr-4'>
                    <div className='flex gap-3'>
                        <img src="assets/Oval1.png" alt="" className='w-10' />
                        <div>
                            <h3 className='font-semibold'>Bila bil</h3>
                            <h4 className='text-tClr font-semibold text-sm'>Andoid Developer</h4>
                        </div>
                    </div>
                    <HiEmojiHappy className='md:text-3xl text-tClr cursor-pointer' />
                </div>
                <div className='px-9 my-4 text-tClr flex items-center gap-4'>
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="assets/face-with-heart.svg" alt="" className='w-6' />
                        <span className='font-semibold'>1</span>
                    </div>
                    <div className='flex gap-5 bg-four py-1 pl-2 pr-3 rounded-3xl'>
                        <img src="assets/face-with-sunglasses-.svg" alt="" className='w-6' />
                        <span className='font-semibold'>3</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Joiners