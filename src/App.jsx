import TopPart from "./components/toppart";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const city = data.name;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4f80c13680b006a396c7df3f380f82e9`;
  const longLatUrl = `https://api.opencagedata.com/geocode/v1/json?q=%22${city}%22&key=09faad7c80e940ca995fd5638e79e4cc`;
  const sunriseSunsetUrl = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted
    if (data.name) {
      axios.get(longLatUrl).then((response) => {
        if (isMounted) {
          // Check if the component is still mounted before updating the state
          setLatitude(response.data.results[0].geometry.lat);
          setLongitude(response.data.results[0].geometry.lng);
        }
      });
    }
    // Cleanup function
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, [data.name]);

  useEffect(() => {
    let isMounted = true;
    if (latitude && longitude) {
      axios.get(sunriseSunsetUrl).then((response) => {
        if (isMounted) {
          setSunrise(response.data.results.sunrise);
          setSunset(response.data.results.sunset);
        }
      });
    }
    return () => {
      isMounted = false; // Set the flag to false when the component is unmounted
    };
  }, [latitude, longitude]);

  return (
    <>
      <div id="container" className="bg-dark-home font-custom h-full">
        <TopPart
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
          data={data}
          city={city}
          sunrise={sunrise}
          sunset={sunset}
        />
      </div>
    </>
  );
}

export default App;
