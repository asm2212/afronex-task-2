import React from 'react'

const TopButtons = () => {
    const cities = [
        {
            id:1,
            name:'london'
        },
        {
            id:2,
            name:'paris'
        },
        {
            id:3,
            name:'rome'
        },
        {
            id:4,
            name:'tokyo'
        },
        {
            id:5,
            name:'moscow'
        }

    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                {city.name}
            </button>
        ))}
    </div>
  )
}

export default TopButtons