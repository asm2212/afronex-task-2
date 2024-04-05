
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import CurrentWeather from './components/CurrentWeather';
import ForecastSearch from './components/ForecastSearch';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-33 bg-gradient-to-br
    from-cyan-600 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <CurrentWeather />
      <ForecastSearch />
    
    </div>
  );
}

export default App;
