
import React from 'react';
import { RiSunFill, RiRainFill, RiCloudFill } from 'react-icons/ri'; // Import icons from React Icons library

function WeatherIcons({ condition }) {
    let icon;

    // Determine which icon to display based on weather condition
    switch (condition) {
        case 'sunny':
            icon = <RiSunFill />;
            break;
        case 'rainy':
            icon = <RiRainFill />;
            break;
        case 'cloudy':
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
