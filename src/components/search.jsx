import React from "react";

function Search(props) {
  const { location, setLocation, searchLocation } = props;

  return (
    <div className="w-1/2 text-dark-mode flex md:justify-end md:items-center md:ml-auto mx-auto md:mx-0 mt-6 md:mt-0 md:bg-dark-second md:h-full md:w-full">
      <input
        className="w-full md:w-1/2 md:h-10 px-4 py-2 rounded-3xl text-white placeholder-gray-400 bg-dark-home focus:outline-none focus:bg-dark-second transition-all ease-in delay-100 focus:bg-opacity-20 shadow-xl"
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
