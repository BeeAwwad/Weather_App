import React, { useState, useEffect } from "react";

function BottomPart(props) {
  const { data } = props;
  const [convertedVisibility, setConvertedVisibility] = useState(null);

  const convertVisibility = (visibility) => {
    const convertedValue = visibility / 10000;
    return convertedValue.toFixed(1);
  };

  useEffect(() => {
    if (data.visibility) {
      const convertedValue = convertVisibility(data.visibility);
      setConvertedVisibility(convertedValue);
    }
  }, [data.visibility]);

  return (
    <>
      {data.main ? (
        <div className="flex mx-auto justify-between bg-dark-second text-dark-mode p-3 rounded-lg animate-fade-up delay-500 overflow-hidden md:m-5 md:mt-5 md:mb-2">
          <div>
            {data.wind ? (
              <div className="flex flex-col mx-3 p-1 items-center overflow-hidden">
                <svg
                  className="w-8 h-7 mt-2 animate-fade-up delay-1000"
                  viewBox="0 0 24 24"
                >
                  <path d="M0,12a1,1,0,0,1,1-1H7a1,1,0,0,1,0,2H1A1,1,0,0,1,0,12Zm20.915-.894A5,5,0,1,0,12,8a1,1,0,0,0,2,0,3,3,0,1,1,3,3H11a1,1,0,0,0,0,2h9a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,0,0-1.886.666C17.615,20.415,23.952,19.579,24,15A4.007,4.007,0,0,0,20.915,11.106ZM11,16H1a1,1,0,0,0,0,2H11a2,2,0,0,1,2,2c-.009,2.337-3.281,2.648-4.057.667a1,1,0,1,0-1.886.666C8.615,25.415,14.952,24.579,15,20A4,4,0,0,0,11,16ZM1,8H7a4,4,0,0,0,4-4C10.952-.581,4.613-1.414,3.057,2.667a1,1,0,0,0,1.886.666C5.72,1.351,8.991,1.663,9,4A2,2,0,0,1,7,6H1A1,1,0,0,0,1,8Z" />
                </svg>
                <p className="font-bold mt-3">
                  {data.wind.speed.toFixed()}km/h
                </p>
                <p className="text-sm">Wind</p>
              </div>
            ) : null}
          </div>
          <div>
            {data.main ? (
              <div className="flex flex-col mx-3 p-1 items-center overflow-hidden">
                <svg
                  className="w-16 h-12 animate-fade-up delay-1000"
                  viewBox="0 0 100 125"
                >
                  <g>
                    <path d="M75.1,47.5L53,12.1c-0.6-1-1.8-1.6-3-1.6s-2.3,0.6-3,1.6L24.9,47.5c0,0,0,0.1-0.1,0.1c-4.9,8.5-4.9,18.7,0.1,27.3   c5.2,9,14.8,14.6,25.1,14.6s19.9-5.6,25.1-14.6c5-8.7,5-18.9,0.1-27.3C75.2,47.6,75.2,47.5,75.1,47.5z M69,71.4   c-3.9,6.8-11.2,11.1-19,11.1s-15.1-4.2-19-11.1c-3.7-6.4-3.8-14-0.2-20.3L50,20.6l19.2,30.6C72.8,57.4,72.7,65,69,71.4z" />
                    <path d="M65.9,58.3c-1.9,0-3.5,1.6-3.5,3.5c0,5.7-4.6,10.3-10.3,10.3c-1.9,0-3.5,1.6-3.5,3.5s1.6,3.5,3.5,3.5   c9.5,0,17.3-7.7,17.3-17.3C69.4,59.8,67.8,58.3,65.9,58.3z" />
                  </g>
                </svg>
                <p className="font-bold">{data.main.humidity}%</p>
                <p className="text-sm">Humidity</p>
              </div>
            ) : null}
          </div>
          <div>
            {data.visibility ? (
              <div className="flex flex-col mx-3 p-1 items-center overflow-hidden">
                <svg
                  className="w-16 h-12 animate-fade-up delay-1000"
                  data-name="Layer 1"
                  viewBox="0 0 100 125"
                  x="0px"
                  y="0px"
                >
                  <path
                    data-name="Compound Path"
                    d="M50,20.5A44.3,44.3,0,0,0,8.8,48.6L8.3,50l.6,1.4a44.2,44.2,0,0,0,82.3,0l.6-1.4-.6-1.4A44.3,44.3,0,0,0,50,20.5Zm0,51A36.3,36.3,0,0,1,16.9,50a36.2,36.2,0,0,1,66.2,0A36.3,36.3,0,0,1,50,71.5Z"
                  />
                  <path
                    data-name="Compound Path"
                    d="M50,31.7A18.3,18.3,0,1,0,68.3,50,18.1,18.1,0,0,0,50,31.7Zm0,28.6A10.3,10.3,0,1,1,60.3,50,10.2,10.2,0,0,1,50,60.3Z"
                  />
                </svg>
                <p id="visible" className="font-bold mt-0">
                  {convertedVisibility}km
                </p>
                <p className="text-sm">Visiibility</p>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default BottomPart;
