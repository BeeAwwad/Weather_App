import React from "react";
import BottomPart from "./bottompart";

function TopPart(props) {
  const { data, city } = props;
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
  const imagesDay = [
    { src: "/img/clear.png", alt: "Clear" },
    { src: "/img/clouds.png", alt: "Clouds" },
    { src: "/img/drizzle.png", alt: "Drizzle" },
    { src: "/img/mist.png", alt: "Mist" },
    { src: "/img/rain.png", alt: "Rain" },
    { src: "/img/snow.png", alt: "Snow" },
    { src: "/img/haze.png", alt: "Haze" },
  ];

  return (
    <div className="text-white flex flex-col items-center bg-dark-mode w-full h-full rounded-3xl">
      <div className="mt-10 mb-6 mx-5 p-4 text-3xl font-semibold">
        <h2>{city}</h2>
      </div>
      <div className="m-2 text-lg text-dark-home bg-dark-second py-1 px-4 rounded-full">
        <p>{currentDate}</p>
      </div>
      <div className="m-2 p-3 text-2xl">{data.weather ? <p>{data.weather[0].main}</p> : null}</div>
      <div className="w-16 hidden md:block">
        {data.weather && (
          <img
            src={
              imagesDay.find((image) => image.alt === data.weather[0].main)?.src
            }
            alt={data.weather[0].main}
          />
        )}
      </div>
      <div className="relative bottom-3 p-2 h-fit text-9xl font-semi-bold">
        {data.main ? (
          <h1>
            {data.main.temp.toFixed()}
            {String.fromCharCode(176)}
          </h1>
        ) : null}
      </div>
      <BottomPart data={data} />
    </div>
  );
}

export default TopPart;
