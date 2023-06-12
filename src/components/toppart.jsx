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

  return (
    <div className="text-white flex bg-dark-mode md:bg-dark-home w-full h-full flex-col">
      <div className="my-auto mx-auto">
        <div className="my-auto flex flex-col items-center md:grid md:grid-rows-4xrow md:grid-cols-2">
          <div className="hidden md:flex text-white bg-dark-second md:h-full md:items-center">
            <h1 className="font-bold text-2xl">weather</h1>
          </div>
          <Search
            location={location}
            setLocation={setLocation}
            searchLocation={searchLocation}
          />
          <div className="flex flex-col items-center md:bg-dark-mode md:h-full">
            {city ? (
              <div className="mt-8 md:mt-2 mb-6 md:mb-2 mx-5 p-4 text-3xl md:text-2xl font-semibold overflow-hidden">
                <h2 className="animate-fade-up">{city}</h2>
              </div>
            ) : null}
            {data.main ? (
              <div className="m-2 text-lg md:text-base text-dark-home bg-dark-second py-1 px-4 rounded-full shadow-inner animate-fade-up overflow-hidden">
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
                    className={`rounded-full w-7 h-7 md:bg ${
                      bgColors.find((bg) => bg.name === data.weather[0].main)
                        .backgroundColor
                    }`}
                  ></div>
                ) : null}
              </div>
            ) : null}

            {data.main ? (
              <div className="relative bottom-3 p-2 h-fit text-9xl font-semi-bold animate-fade-up delay-500">
                <span>{data.main.temp.toFixed()}</span>
                <span>{String.fromCharCode(176)}</span>
              </div>
            ) : null}
          </div>
          <div className="overflow-hidden md:bg-dark-second md:h-full md:flex md:flex-col md:justify-between">
            {sunrise && sunset ? (
              <div className="hidden md:flex">
                <div>
                  <div>
                    <h4>Sunrise</h4>
                    <h4>{newSunrise}am</h4>
                  </div>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 72 90">
                    <g>
                      <path d="M32.5151367,50.3134766c-1.6757813,0.6035156-3.1757813,1.6396484-4.3383789,2.9990234   c-0.1796875,0.2099609-0.1547852,0.5253906,0.0546875,0.7050781c0.0942383,0.0810547,0.2099609,0.1201172,0.3251953,0.1201172   c0.140625,0,0.28125-0.0595703,0.3798828-0.1748047c1.0498047-1.2275391,2.4042969-2.1640625,3.9174805-2.7080078   c0.2597656-0.09375,0.3945313-0.3798828,0.3012695-0.6396484C33.0615234,50.3544922,32.7749023,50.2226563,32.5151367,50.3134766z" />
                      <path d="M27.1289063,55.8193359c-0.253418-0.1025391-0.5478516,0.0175781-0.6523438,0.2724609   c-0.168457,0.4111328-0.3115234,0.8359375-0.425293,1.2636719c-0.0708008,0.2666016,0.0883789,0.5400391,0.3549805,0.6113281   c0.0429688,0.0117188,0.0864258,0.0166016,0.1289063,0.0166016c0.2211914,0,0.4233398-0.1474609,0.4829102-0.3720703   c0.1020508-0.3857422,0.2314453-0.7685547,0.3833008-1.1386719C27.5063477,56.2167969,27.3842773,55.9248047,27.1289063,55.8193359   z" />
                      <path d="M36,34.5c-0.8286133,0-1.5,0.671875-1.5,1.5v5.75c0,0.828125,0.6713867,1.5,1.5,1.5s1.5-0.671875,1.5-1.5V36   C37.5,35.171875,36.8286133,34.5,36,34.5z" />
                      <path d="M60,58.5h-9.6742554C49.572937,51.2600098,43.4362183,45.5957031,36,45.5957031S22.427063,51.2600098,21.6742554,58.5H12   c-0.8286133,0-1.5,0.671875-1.5,1.5s0.6713867,1.5,1.5,1.5h48c0.8286133,0,1.5-0.671875,1.5-1.5S60.8286133,58.5,60,58.5z    M36,48.5957031c5.7788696,0,10.5560913,4.3242188,11.2943726,9.9042969H24.7056274   C25.4439087,52.9199219,30.2211304,48.5957031,36,48.5957031z" />
                      <path d="M48.9047852,48.5957031c0.3837891,0,0.7680664-0.1464844,1.0605469-0.4394531l4.065918-4.0664063   c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938s-1.5361328-0.5859375-2.1210938,0l-4.065918,4.0664063   c-0.5859375,0.5859375-0.5859375,1.5351563,0,2.1210938C48.137207,48.4492188,48.5209961,48.5957031,48.9047852,48.5957031z" />
                      <path d="M22.034668,48.15625c0.2929688,0.2929688,0.6767578,0.4394531,1.0605469,0.4394531   s0.7675781-0.1464844,1.0605469-0.4394531c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938l-4.065918-4.0664063   c-0.5859375-0.5859375-1.5351563-0.5859375-2.1210938,0s-0.5859375,1.5351563,0,2.1210938L22.034668,48.15625z" />
                      <path d="M45.9194336,57.2470703c-0.3793945-1.3681641-1.0273438-2.6230469-1.9257813-3.7304688   c-0.1728516-0.2138672-0.4887695-0.2480469-0.703125-0.0722656c-0.2143555,0.1738281-0.2470703,0.4882813-0.0732422,0.703125   c0.8110352,0.9990234,1.3959961,2.1318359,1.7382813,3.3671875c0.0615234,0.2207031,0.2626953,0.3662109,0.4814453,0.3662109   c0.0444336,0,0.0893555-0.0058594,0.1337891-0.0185547C45.8369141,57.7890625,45.9931641,57.5136719,45.9194336,57.2470703z" />
                      <path d="M32.4633789,17.6582031L34.5,15.6212769v9.5457153c0,0.828125,0.6713867,1.5,1.5,1.5s1.5-0.671875,1.5-1.5v-9.5457153   l2.0366211,2.0369263c0.2929688,0.2929688,0.6767578,0.4394531,1.0605469,0.4394531s0.7675781-0.1464844,1.0605469-0.4394531   c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938l-4.5961304-4.5966187C36.7901001,10.668457,36.4147949,10.5,36,10.5   s-0.7901001,0.168457-1.0615845,0.4404907l-4.5961304,4.5966187c-0.5859375,0.5859375-0.5859375,1.5351563,0,2.1210938   S31.878418,18.2441406,32.4633789,17.6582031z" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h4>Sunset</h4>
                  <h4>{newSunset}pm</h4>
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 72 90">
                    <g>
                      <path d="M32.5151367,50.3134766c-1.6757813,0.6035156-3.1757813,1.6396484-4.3383789,2.9990234   c-0.1796875,0.2099609-0.1547852,0.5253906,0.0546875,0.7050781c0.0942383,0.0810547,0.2099609,0.1201172,0.3251953,0.1201172   c0.140625,0,0.28125-0.0595703,0.3798828-0.1748047c1.0498047-1.2275391,2.4042969-2.1640625,3.9174805-2.7080078   c0.2597656-0.09375,0.3945313-0.3798828,0.3012695-0.6396484C33.0610352,50.3544922,32.7753906,50.2226563,32.5151367,50.3134766z" />
                      <path d="M27.1289063,55.8193359c-0.253418-0.1025391-0.5478516,0.0175781-0.6523438,0.2724609   c-0.168457,0.4111328-0.3115234,0.8359375-0.425293,1.2636719c-0.0708008,0.2666016,0.0883789,0.5400391,0.3549805,0.6113281   c0.0429688,0.0117188,0.0864258,0.0166016,0.1289063,0.0166016c0.2211914,0,0.4233398-0.1474609,0.4829102-0.3720703   c0.1020508-0.3857422,0.2314453-0.7685547,0.3833008-1.1386719C27.5063477,56.2167969,27.3842773,55.9248047,27.1289063,55.8193359   z" />
                      <path d="M36,34.5c-0.8286133,0-1.5,0.671875-1.5,1.5v5.75c0,0.828125,0.6713867,1.5,1.5,1.5s1.5-0.671875,1.5-1.5V36   C37.5,35.171875,36.8286133,34.5,36,34.5z" />
                      <path d="M60,58.5h-9.6742554C49.572937,51.2600098,43.4362183,45.5957031,36,45.5957031S22.427063,51.2600098,21.6742554,58.5H12   c-0.8286133,0-1.5,0.671875-1.5,1.5s0.6713867,1.5,1.5,1.5h48c0.8286133,0,1.5-0.671875,1.5-1.5S60.8286133,58.5,60,58.5z    M36,48.5957031c5.7788696,0,10.5560913,4.3242188,11.2943726,9.9042969H24.7056274   C25.4439087,52.9199219,30.2211304,48.5957031,36,48.5957031z" />
                      <path d="M48.9047852,48.5957031c0.3837891,0,0.7680664-0.1464844,1.0605469-0.4394531l4.065918-4.0664063   c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938s-1.5361328-0.5859375-2.1210938,0l-4.065918,4.0664063   c-0.5859375,0.5859375-0.5859375,1.5351563,0,2.1210938C48.137207,48.4492188,48.5209961,48.5957031,48.9047852,48.5957031z" />
                      <path d="M22.034668,48.15625c0.2929688,0.2929688,0.6767578,0.4394531,1.0605469,0.4394531   s0.7675781-0.1464844,1.0605469-0.4394531c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938l-4.065918-4.0664063   c-0.5859375-0.5859375-1.5351563-0.5859375-2.1210938,0s-0.5859375,1.5351563,0,2.1210938L22.034668,48.15625z" />
                      <path d="M45.9194336,57.2470703c-0.3793945-1.3681641-1.0273438-2.6230469-1.9257813-3.7304688   c-0.1733398-0.2138672-0.4892578-0.2480469-0.703125-0.0722656c-0.2143555,0.1738281-0.2470703,0.4882813-0.0732422,0.703125   c0.8110352,0.9990234,1.3959961,2.1318359,1.7382813,3.3671875c0.0615234,0.2207031,0.2626953,0.3662109,0.4814453,0.3662109   c0.0444336,0,0.0893555-0.0058594,0.1337891-0.0185547C45.8369141,57.7890625,45.9931641,57.5136719,45.9194336,57.2470703z" />
                      <path d="M34.9384155,26.2265015c0.0693359,0.069458,0.1455688,0.1317749,0.227356,0.1866455   c0.0211792,0.0141602,0.0449829,0.0231934,0.0667725,0.0362549c0.0617676,0.0370483,0.1236572,0.0739746,0.1907959,0.1019287   c0.031189,0.0129395,0.0646362,0.019104,0.0966187,0.0299683c0.0603027,0.0204468,0.1196899,0.0429688,0.1831665,0.0557251   C35.8001709,26.6566162,35.8995361,26.6669922,36,26.6669922s0.1998291-0.010376,0.296875-0.0299683   c0.0634766-0.0127563,0.1228638-0.0352783,0.1831665-0.0557251c0.0319824-0.0108643,0.0654297-0.0170288,0.0966187-0.0299683   c0.0671387-0.0279541,0.1290283-0.0648804,0.1907959-0.1019287c0.0217896-0.0130615,0.0455933-0.0220947,0.0667725-0.0362549   c0.0817871-0.0548706,0.15802-0.1171875,0.227356-0.1866455l4.5961304-4.5966187   c0.5859375-0.5859375,0.5859375-1.5351563,0-2.1210938s-1.5361328-0.5859375-2.1210938,0L37.5,21.5457153V12   c0-0.828125-0.6713867-1.5-1.5-1.5s-1.5,0.671875-1.5,1.5v9.5457153l-2.0366211-2.0369263   c-0.5859375-0.5859375-1.5351563-0.5859375-2.1210938,0s-0.5859375,1.5351563,0,2.1210938L34.9384155,26.2265015z" />
                    </g>
                  </svg>
                </div>
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
