import React from 'react'

function topButton() {
    const cities = [
        {
            id:1,
            name: 'New York'
        },
        {
            id:2,  
            name:'Los Angeles' 
        },
        {
                id:3,
                name:"Houston"
            }
      ]
        
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id}className='text-white text-lg font-medium'>{city.name}</button>
        ))}
    </div>
  )
}

export default topButton