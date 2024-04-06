import React from 'react';
import { formatToLocalTime } from "../service/weather.js";

const TimeAndLocation = ({ weather }) => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight'>
                {formatToLocalTime(weather.dt, weather.timezone, "cccc, dd LLL yyyy' | Local time: 'hh:mm a")}
            </p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-3xl font-medium'>{weather.name}, {weather.country}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation;
