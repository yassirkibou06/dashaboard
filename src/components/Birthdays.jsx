import React from 'react'

const Birthdays = () => {
    return (
        <div className='border-b-2 border-boClr mr-3 py-5'>
            <h2 className='font-semibold text-lg'>🎂 Birthdays</h2>
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
                        <div className='border-[1px] border-boClr w-12 rounded-ROne p-1'>
                            <img src="assets/36034406.jpg" alt="" />
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
                    <div className='border-[1px] border-boClr w-12 rounded-ROne p-1'>
                        <img src="assets/36034406.jpg" alt="" />
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
                    <div className='border-[1px] border-boClr w-12 rounded-ROne p-1'>
                        <img src="assets/36034406.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Birthdays