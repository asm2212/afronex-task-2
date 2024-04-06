import React from 'react';
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons';

const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-5'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type='text'
            placeholder='Search for city names or ZIP code...'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize
                       placeholder:lowercase'
            />
            

        </div>

    </div>
  )
}

export default Inputs