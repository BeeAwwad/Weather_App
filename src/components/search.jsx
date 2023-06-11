import React from "react";

function Search(props) {
  const { location, setLocation, searchLocation } = props;

  return (
    <div className="w-1/2 text-dark-mode flex mx-auto mt-6">
      <input
        className="w-full px-4 py-2 rounded-3xl text-white placeholder-gray-400 bg-dark-home focus:outline-none focus:bg-dark-second transition-all ease-in delay-100 focus:bg-opacity-20 shadow-xl"
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
