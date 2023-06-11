import React from "react";
import BottomPart from "./bottompart";
import Search from "./search";

function TopPart(props) {
  const { location, setLocation, searchLocation, data, city } = props;

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

  return (
    <div className="text-white flex bg-dark-mode md:bg-dark-home w-full h-full flex-col">
      <div className="my-auto flex flex-col md:p-12 md:bg-dark-third items-center">
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <div className="my-auto flex flex-col items-center md:bg-white md:flex-row md:mx-auto">
          <div className="flex flex-col items-center md:bg-dark-mode">
          {city ? (
            <div className="mt-8 md:mt-2 mb-6 md:mb-2 mx-5 p-4 text-3xl font-semibold overflow-hidden">
              <h2 className="animate-fade-up">{city}</h2>
            </div>
          ) : null}
          {data.main ? (
            <div className="m-2 text-lg text-dark-home bg-dark-second py-1 px-4 rounded-full shadow-inner animate-fade-up overflow-hidden">
              <p className="animate-fade-up">{currentDate}</p>
            </div>
          ) : null}

          {data.weather ? (
            <div className="m-2 p-3 text-2xl md:hidden overflow-hidden">
              <p className="animate-fade-up delay-300">
                {data.weather[0].main}
              </p>
            </div>
          ) : null}

          {data.main ? (
            <div className="relative bottom-3 p-2 h-fit md:text-8xl text-9xl font-semi-bold animate-fade-up delay-500">
              <span>{data.main.temp.toFixed()}</span>
              <span>{String.fromCharCode(176)}</span>
            </div>
          ) : null}
          </div>
          <div className="overflow-hidden md:ml-10 md:bg-dark-mode">
            {data.weather &&
            data.weather[0].main &&
            bgColors.find((bg) => bg.name === data.weather[0].main) ? (
              <div
                className={`md:mx-auto md:w-40 md:h-40 md:bg ${
                  bgColors.find((bg) => bg.name === data.weather[0].main)
                    .backgroundColor
                }`}
              >
                {/* Your content */}
              </div>
            ) : null}
            <BottomPart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
