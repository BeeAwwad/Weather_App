import React, { useState, useEffect } from "react";
import BottomPart from "./bottompart";
import Search from "./search";

function TopPart(props) {
  const { sunrise, sunset, location, setLocation, searchLocation, data, city } =
    props;
  const [newSunrise, setNewSunrise] = useState("");
  const [newSunset, setNewSunset] = useState("");

  useEffect(() => {
    if (sunrise && sunset) {
      const setParts = sunrise.split(":");
      const formatSunrise = setParts[0] + ":" + setParts[1];
      setNewSunrise(formatSunrise); // sunrise

      const setParts2 = sunset.split(":");
      const formatSunset = setParts2[0] + ":" + setParts2[1];
      setNewSunset(formatSunset); // sunset
    }
  }, [sunrise, sunset]);

  const date = new Date();
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const options = { weekday: "long" };
  const weekday = date.toLocaleString("en-US", options);
  const currentDate = `${weekday}, ${day} ${monthNames[date.getMonth()]}`;

  const bgColors = [
    { name: "Clear", backgroundColor: "bg-Clear" },
    { name: "Clouds", backgroundColor: "bg-Clouds" },
    { name: "Drizzle", backgroundColor: "bg-Drizzle" },
    { name: "Mist", backgroundColor: "bg-Mist" },
    { name: "Rain", backgroundColor: "bg-Rain" },
    { name: "Snow", backgroundColor: "bg-Snow" },
    { name: "Haze", backgroundColor: "bg-Haze" },
    { name: "Dust", backgroundColor: "bg-Dust" },
    { name: "Smoke", backgroundColor: "bg-Smoke" },
    { name: "Thunderstorm", backgroundColor: "bg-Thunderstorm" },
  ];

  const images = [
    { name: "sunrise", image: "img/sunrise.png" },
    { name: "sunset", image: "img/sunset.png" },
  ];

  return (
    <div className="text-white flex bg-dark-mode md:bg-dark-home w-full h-full flex-col ">
      <div className="my-auto mx-auto">
        <div className={`my-auto flex flex-col items-center md:grid md:grid-cols-2 ${data.main ? "md:grid-rows-4xrow" : "md:grid-rows-1row"} md:rounded-lg md:overflow-hidden`}>
          <div
            className={`hidden md:flex text-white bg-dark-second md:h-full md:items-center md:p-4 ${
              Object.keys(data).length === 0 ? "md:rounded-l-lg" : ""
            }`}
          >
            <h1 className="font-bold text-2xl">weather</h1>
          </div>
          <Search
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
            data={data}
          />
          {data.main ? (
            <div className="flex flex-col items-center md:bg-dark-mode md:h-full">
              {city ? (
                <div className="mt-8 md:mt-2 mb-6 md:mb-2 mx-5 p-4 text-3xl md:text-xl font-semibold overflow-hidden">
                  <h2 className="animate-fade-up">{city}</h2>
                </div>
              ) : null}
              {data.main ? (
                <div className="m-2 text-lg md:text-sm text-dark-home bg-dark-second py-1 px-4 rounded-full shadow-inner animate-fade-up overflow-hidden">
                  <p className="animate-fade-up">{currentDate}</p>
                </div>
              ) : null}

              {data.weather ? (
                <div className="m-2 p-3 flex gap-2 text-2xl md:text-xl overflow-hidden">
                  <p className="animate-fade-up delay-300">
                    {data.weather[0].main}
                  </p>
                  {data.weather &&
                  data.weather[0].main &&
                  bgColors.find((bg) => bg.name === data.weather[0].main) ? (
                    <div
                      className={`animate-fade-up delay-300 rounded-full w-7 h-7 md:bg ${
                        bgColors.find((bg) => bg.name === data.weather[0].main)
                          .backgroundColor
                      }`}
                    ></div>
                  ) : null}
                </div>
              ) : null}

              {data.main ? (
                <div className="relative bottom-3 p-2 h-fit text-9xl md:text-8xl font-semi-bold animate-fade-up delay-500">
                  <span>{data.main.temp.toFixed()}</span>
                  <span>{String.fromCharCode(176)}</span>
                </div>
              ) : null}
            </div>
          ) : null}
          {data.main ? (
            <div className="overflow-hidden md:bg-dark-mode md:h-full md:flex md:flex-col md:justify-between">
              <BottomPart data={data} />
              {sunrise && sunset ? (
                <div className="hidden md:grid md:grid-rows-3xrow md:bg-dark-second md:m-5 md:p-3 md:mb-5 md:mt-2 md:rounded-lg text-dark-mode animate-fade-up delay-300">
                  <div className="flex justify-between mx-4 px-4">
                    <div className="overflow-hiddden">
                      <h4 className="font-bold animate-fade-up delay-500">
                        Sunrise
                      </h4>
                      <p className="text-sm animate-fade-up delay-500">
                        {newSunrise}am
                      </p>
                    </div>
                    <div className="overflow-hiddden">
                      <h4 className="font-bold animate-fade-up delay-500">
                        Sunset
                      </h4>
                      <p className="text-sm animate-fade-up delay-500">
                        {newSunset}pm
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between mx-4 overflow-hidden">
                    <img
                      className="animate-fade-up delay-700 w-2/5"
                      src={images[0].image}
                      alt={images[0].name}
                    />
                    <img
                      className="animate-fade-up delay-700 w2/5"
                      src={images[1].image}
                      alt={images[1].name}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TopPart;
