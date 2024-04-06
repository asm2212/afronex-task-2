import React from 'react'

const TimeAndLocation = () => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                Monday,31 May 2015 | local time 8:45 PM 
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>Berlin,DE</p>
        </div>
    </div>
  )
}

export default TimeAndLocation