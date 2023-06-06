import TopPart from "./components/toppart";
import Search from "./components/search";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4f80c13680b006a396c7df3f380f82e9`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const city = data.name;

  return (
    <>
      <div id="container" className="bg-dark-home">
        <Search
          location={location}
          setLocation={setLocation}
          searchLocation={searchLocation}
        />
        <TopPart data={data} city={city} />
      </div>
    </>
  );
}

export default App;
