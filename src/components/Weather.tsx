const Weather = () => {
  return (
    <div className="hidden">
      <img src="/images/rain.png" alt="weather" className="w-24 mt-5 mx-auto" />
      <h1 className="text-4xl font-medium">14°C</h1>
      <h2 className="text-2xl font-medium -mt-2">Raipur</h2>

      <div className="flex items-center justify-between px-5 mt-10">
        <div className="flex items-center text-left">
          <img src="/images/wind.png" className="w-11 mr-4" />
          <div>
            <p className="text-lg -mt-2">50 km/h</p>
            <p className="text-sm">Wind Speed</p>
          </div>
        </div>

        <div className="flex items-center text-left">
          <img src="/images/humidity.png" className="w-11 mr-4" />
          <div>
            <p className="text-lg -mt-2">50%</p>
            <p className="text-sm">Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
