import React from 'react'

const Notifications = () => {
    return (
        <div className='border-b-2 border-boClr mr-6 py-5'>
            <h2 className='font-semibold text-lg'>🔔 Notifications</h2>
            <div>
                <div className='box mt-5 flex items-center justify-between'>
                    <div>
                        <h3 className='font-semibold'>Vacations</h3>
                        <h4 className='text-tClr font-semibold text-sm'>16/04/2022</h4>
                    </div>
                    <button className='text-sm bg-two text-three py-2 px-3 rounded-ROne font-semibold'>
                        Details
                    </button>
                </div>
                <div className='box mt-5 flex items-center justify-between'>
                    <div>
                        <h3 className='font-semibold'>End of years evalution</h3>
                        <h4 className='text-tClr font-semibold text-sm'>In 20 minutes</h4>
                    </div>
                    <button className='text-sm bg-two text-three py-2 px-3 rounded-ROne font-semibold'>
                        Details
                    </button>
                </div>
                <div className='box mt-5 flex items-center justify-between'>
                    <div>
                        <h3 className='font-semibold'>Vacations</h3>
                        <h4 className='text-tClr font-semibold text-sm'>16/04/2022</h4>
                    </div>
                    <button className='text-sm bg-two text-three py-2 px-3 rounded-ROne font-semibold'>
                        Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notifications