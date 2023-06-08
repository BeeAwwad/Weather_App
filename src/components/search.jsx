import React from "react";

function Search(props) {
  const { location, setLocation, searchLocation } = props;

  return (
    <div className="absolute  text-white">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        className='peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:bg-transparent focus:pl-16 focus:pr-4'
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className='absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent dark-second px-3.5 peer-focus:border-dark-second peer-focus:stroke-dark-second'
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

export default Search;
