/* import React from 'react';

const TopButtons = ({ setQuery }) => {
    const cities = [
        { id:1, name:'London' },
        { id:2, name:'Paris' },
        { id:3, name:'Rome' },
        { id:4, name:'Tokyo' },
        { id:5, name:'Moscow' }
    ];

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button 
              key={city.id} 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              onClick={() => setQuery({ q: city.name })}
            >
                {city.name}
            </button>
        ))}
    </div>
  );
}

export default TopButtons;
 */