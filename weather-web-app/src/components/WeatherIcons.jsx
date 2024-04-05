
import React from 'react';
import { RiSunFill, RiRainFill, RiCloudFill } from 'react-icons/ri';

function WeatherIcons({ condition }) {
    let icon;

    switch (condition) {
        case 'Clear':
            icon = <RiSunFill />;
            break;
        case 'Rain':
            icon = <RiRainFill />;
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

export default WeatherIcons;