import React, { useState, useEffect } from "react";

const Navigation = ({
  currentCity,
  setCurrentCity,
  gameState,
  setGameState,
  rerollToyPrices,
  rerollPricesForStay,
}) => {
  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
  ];
  const stayOptions = [
    { name: "Sleep in your car", cost: 0 },
    { name: "Stay at a campground", cost: 25 },
    { name: "Sleep at a hotel", cost: 50 },
    // ... other options
  ];

  // State to hold ticket prices for each city
  const [ticketPrices, setTicketPrices] = useState({});
  const [selectedCity, setSelectedCity] = useState(currentCity);

  useEffect(() => {
    // Generate initial ticket prices
    const prices = generateTicketPrices();
    setTicketPrices(prices);
  }, []);

  useEffect(() => {
    // Reroll ticket prices when entering a new city
    const prices = generateTicketPrices();
    setTicketPrices(prices);
    setSelectedCity(currentCity); // Reset selected city to current city
  }, [currentCity]);

  function generateTicketPrices() {
    return cities.reduce((prices, city) => {
      if (city !== currentCity) {
        // No ticket price for current city
        prices[city] = getRandomTicketPrice();
      }
      return prices;
    }, {});
  }

  function getRandomTicketPrice() {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  }

  const handleCitySelect = (event) => {
    setSelectedCity(event.target.value);
  };

  const travel = () => {
    const price = ticketPrices[selectedCity];
    if (gameState.cash >= price) {
      setCurrentCity(selectedCity); // Update current city
      setGameState((prevState) => ({
        ...prevState,
        cash: prevState.cash - price,
        // Other state updates for traveling to a new city
      }));
      rerollToyPrices();
    } else {
      alert("Not enough cash for the ticket");
    }
  };

  const handleStayOption = (option) => {
    if (gameState.cash >= option.cost) {
      setGameState((prevState) => ({
        ...prevState,
        cash: prevState.cash - option.cost,
        // ... other state updates if needed
      }));
      rerollPricesForStay();
    } else {
      alert("Not enough cash for this option");
    }
  };

  return (
    <div>
      <h3>You are in {currentCity}</h3>
      <h3>Travel to:</h3>
      <select value={selectedCity} onChange={handleCitySelect}>
        {cities.map(
          (city) =>
            city !== currentCity && (
              <option key={city} value={city}>
                {city} - ${ticketPrices[city]}
              </option>
            )
        )}
      </select>
      <div>
        <button onClick={travel}>Travel ${ticketPrices[selectedCity]}</button>
      </div>
      <p>Or..</p>
      {stayOptions.map((option) => (
        <button key={option.name} onClick={() => handleStayOption(option)}>
          {option.name} - ${option.cost}
        </button>
      ))}
    </div>
  );
};

export default Navigation;
