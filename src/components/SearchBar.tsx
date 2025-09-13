const SearchBar = () => {

  const 

  // vanila
  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
  searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkWeather(searchBox.value);
    }
  });



  return (
    <div className="w-full flex items-center justify-between">
      <input
        type="text"
        placeholder="Enter City Name"
        spellCheck={false}
        className="bg-[#ffffff] text-[#272727] flex-1 h-10 px-5 mr-4 rounded-md text-sm font-medium shadow-md focus:outline-none"
      />
      <button className="bg-[#ebfffc] w-12 h-12 rounded-md shadow-md flex items-center justify-center">
        <img src="/images/search.png" alt="search" className="w-6 mt-1" />
      </button>
    </div>
  );
};

export default SearchBar;
