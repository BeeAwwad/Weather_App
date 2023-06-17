import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";

function Search(props) {
  const { error, isLoading, data, location, setLocation, searchLocation } =
    props;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div
      className={`${
        data.main ? "w-1/2" : "w-full"
      } md:w-full text-dark-mode flex flex-col md:flex-row items-center md:justify-end md:items-center md:ml-auto mx-auto md:mx-0 mt-6 md:mt-0 custom-after after md:bg-dark-second md:h-full md:p-4 ${
        Object.keys(data).length === 0 ? "md:rounded-r-lg" : ""
      }`}
    >
      <input
        className="w-full md:w-1/2 md:h-10 px-4 py-2 rounded-3xl text-white placeholder-gray-400 bg-dark-home md:bg-dark-mode focus:outline-none focus:bg-dark-second md:focus:bg-dark-mode transition-all ease-in delay-100 focus:bg-opacity-20 md:focus:bg-opacity-75 shadow-xl mb-5 md:mb-0 md:mr-3"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        type="text"
        placeholder="City..."
      />
      {isLoading && (
        <ProgressBar
          height={isMobile ? "60" : "40"}
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor={isMobile ? "#01C38D" : "#132D46"}
          barColor={isMobile ? "#01C38D" : "#132D46"}
        />
      )}

      {error && (
        <div className="bg-red-700 md:hidden rounded-lg p-2 md:ml-auto">
          <p className="text-white text-xs md:hidden">{error}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
