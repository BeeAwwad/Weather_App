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
    <div className="text-white flex bg-dark-mode w-full h-full flex-col">
      <div className="my-auto flex flex-col items-center">
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <div className="mt-10 mb-6 mx-5 p-4 text-3xl font-semibold">
          <h2>{city}</h2>
        </div>
        <div className="m-2 text-lg text-dark-home bg-dark-second py-1 px-4 rounded-full shadow-inner">
          <p>{currentDate}</p>
        </div>
        <div className="m-2 p-3 text-2xl">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className="relative bottom-3 p-2 h-fit text-9xl font-semi-bold">
          {data.main ? (
            <h1>
              {data.main.temp.toFixed()}
              {String.fromCharCode(176)}
            </h1>
          ) : null}
        </div>
        <div>
          {data.weather &&
          data.weather[0].main &&
          bgColors.find((bg) => bg.name === data.weather[0].main) ? (
            <div
              className={`md:w-12 md:h-12 md:bg ${
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
  );
}

export default TopPart;
