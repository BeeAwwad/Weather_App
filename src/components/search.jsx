import React from "react";

function Search(props) {
  const { location, setLocation, searchLocation } = props;

  return (
    <div className="absolute w-1/2 text-dark-mode">
      <input
      className="w-full px-4 py-2 rounded-3xl text-dark-second placeholder-gray-300 bg-dark-home focus:outline-none focus:bg-dark-second focus:bg-opacity-20"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        placeholder="Search here..."
      />
    </div>
  );
}

export default Search;
