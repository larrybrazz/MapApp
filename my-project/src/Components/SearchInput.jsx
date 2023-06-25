import React, { useEffect, useRef, useState } from 'react'; 
import axios from 'axios';

const SearchInput = ({ setCoordinates }) => {
  const [parkName, setParkName] = useState(null);
  const [caravanNumber, setCaravanNumber] = useState(null);
  const [data, setData] = useState([]);
  const parkNameRef = useRef(null);
  const caravanNumberRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = axios
      .get("http://localhost:3000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error());
  }, []);

  function handleInputChange(e) {
    setParkName(e.target.value);
  }

  function clearInputField(ref) {
    if (ref.current) {
      ref.current.value = "";
    }
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent form submission

    // Find the data based on the entered park name
    const foundData = data.find((item) => item.Name === parkName);
    if (foundData) {
      setCoordinates({ lat: foundData.lat, lng: foundData.lng });
      console.log(`Latitude: ${foundData.lat}, Longitude: ${foundData.lng}`);
    } else {
      console.log("Error: Caravan not found");
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="border border-zinc-600 rounded-lg flex justify-between items-center px-6 py-1 ">
            <input
              className="outline-none text-center"
              ref={parkNameRef}
              type="text"
              placeholder=" Caravan name"
              onChange={handleInputChange}
            />
            <span
              className="fa fa-xmark"
              onClick={() => clearInputField(parkNameRef)}
            ></span>
          </div>
          <div className="border border-zinc-600 rounded-lg flex justify-between items-center px-6 py-1 ">
            <input
              className="outline-none text-center"
              ref={caravanNumberRef}
              type="number"
              placeholder="number"
              onChange={(e) => setCaravanNumber(e.target.value)}
            />
            <span
              className="fa fa-xmark"
              onClick={() => clearInputField(caravanNumberRef)}
            ></span>
          </div>
        </div>
        <button className="border w-full text-white border-zinc-600 rounded-lg flex justify-between items-center px-6 py-1 bg-blue-600">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
