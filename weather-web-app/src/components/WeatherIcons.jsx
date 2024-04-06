/* // WeatherIcons.js
import React from 'react';
import { RiSunFill, RiCloudFill } from 'react-icons/ri';
import { WiRain } from 'react-icons/wi';

function WeatherIcons({ condition }) {
    let icon;

    switch (condition) {
        case 'Clear':
            icon = <RiSunFill />;
            break;
        case 'Rain':
            icon = <WiRain />;
            break;
        case 'Clouds':
            icon = <RiCloudFill />;
            break;
        default:
            icon = <RiSunFill />;
    }

    return (
        <div className="text-white">
            {icon}
        </div>
    );
}

export default WeatherIcons; */