import axios from "axios";
import React from "react";
// import "./App.css";
import { useState, useEffect } from "react";
import "./App-1.css"


function App() {
  const [location, setLocation] = useState({});
  const [ipAddress, setIpAddress] = useState('');
  const [inputValue, setInputValue] = useState('');

  const getLocation = async (ip) => {
    try {
      // Check if the IP address is not empty
      if (!ip) {
        alert('Please enter a valid IP address.');
        return;
      }

      const response = await axios.get(`http://ip-api.com/json/${ip}`);
      setLocation(response.data);
    } catch (error) {
      console.error("Error fetching location data:", error);
      setLocation({});
      alert('Error fetching location data. Please check the IP address.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update ipAddress state with the input value
    setIpAddress(inputValue);
    // Fetch location for the entered IP address
    getLocation(inputValue);
  };

  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter IP address"
        />
        <button type="submit">Get Location</button>
      </form>
      <div>
        <p>Latitude : {location.lat || 'N/A'}</p>
        <p>Longitude : {location.lon || 'N/A'}</p>
        <p>Country : {location.country || 'N/A'}</p>
        <p>City : {location.city || 'N/A'}</p>
        <p>Timezone : {location.timezone || 'N/A'}</p>
      </div>
    </div>
  );
}

export default App;





