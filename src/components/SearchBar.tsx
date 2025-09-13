import { useState } from "react";

const SearchBar = () => {
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    error && (
      <p className="text-red-500 text-2xl text-center">Invalid City Name</p>
    );
  }

  return (
    <div className="w-full flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter City Name"
        spellCheck={false}
        name={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(event) => event.key === "Enter" && fetchWeather()}
        className="bg-[#ffffff] text-[#272727] flex-1 h-10 px-5 mr-4 rounded-md text-sm font-medium shadow-md focus:outline-none"
      />
      <button className="bg-[#ebfffc] w-12 h-12 rounded-md shadow-md flex items-center justify-center">
        <img src="/images/search.png" alt="search" className="w-6 mt-1" />
      </button>
      {weather && (
        <div className="mt-4">
          <h2 className="text-xl">{weather.name}</h2>
          <h1 className="text-3xl">{Math.round(weather.main.temp)}°c</h1>
          <p>{weather.wind.speed} km/h wind</p>
          <p>{weather.main.humidity}% humidity</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
