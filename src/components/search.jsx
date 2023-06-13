import React from "react";

function Search(props) {
  const { data, location, setLocation, searchLocation } = props;

  return (
    <div className={`w-1/2 text-dark-mode flex md:justify-end md:items-center md:ml-auto mx-auto md:mx-0 mt-6 md:mt-0 md:bg-dark-second md:h-full md:w-full md:p-4 ${Object.keys(data).length === 0 ? "md:rounded-r-lg" : ""}`}>
      <input
        className="w-full md:w-1/2 md:h-10 px-4 py-2 rounded-3xl text-white placeholder-gray-400 bg-dark-home md:bg-dark-mode focus:outline-none focus:bg-dark-second md:focus:bg-dark-mode transition-all ease-in delay-100 focus:bg-opacity-20 md:focus:bg-opacity-75 shadow-xl"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        placeholder="City..."
      />
    </div>
  );
}

export default Search;
