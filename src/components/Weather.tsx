import { useWeatherStore } from "../store/store";
// import Error from "./Error";
import { motion } from "motion/react";

const Weather = () => {
  const weather = useWeatherStore((state) => state.weather);

  // if (error) return <Error err={error} />;
  // if (!weather) return <Error err="Search for a city" />;

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: weather === null ? 0 : "auto" }}
      className="overflow-hidden"
    >
      <img
        src="/images/clouds.png"
        alt="weather"
        className="w-24 mt-5 mx-auto"
      />
      <h1 className="text-4xl font-medium">{weather?.main?.temp}°C</h1>
      <h2 className="text-2xl font-medium -mt-2">{weather?.name}</h2>

      <div className="flex items-center justify-between px-5 mt-10">
        <div className="flex items-center text-left">
          <img src="/images/wind.png" className="w-11 mr-4" />
          <div>
            <p className="text-lg -mt-2">{weather?.wind.speed} km/h</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>

        <div className="flex items-center text-left">
          <img src="/images/humidity.png" className="w-11 mr-4" />
          <div>
            <p className="text-lg -mt-2">{weather?.main.humidity}%</p>
            <p className="text-sm">Humidity</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Weather;
