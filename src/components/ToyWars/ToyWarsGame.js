import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Marketplace from "./Marketplace";
import Inventory from "./Inventory";

const ToyWarsGame = () => {
  const baseToyPrices = {
    "Yo-Yo": 5,
    "Rubik's Cube": 10,
    "Cabbage Patch Kids": 20,
    Tamagotchi: 30,
    "Nintendo Game Boy": 50,
    iPad: 200,
  };

  // Function to get initial game state
  const getInitialState = () => {
    const savedGameState = localStorage.getItem("toyWarsGameState");
    if (savedGameState) {
      try {
        return JSON.parse(savedGameState);
      } catch (error) {
        console.error("Failed to load saved game state:", error);
        // Handle the error or continue to return default state
      }
    }

    // Default initial state
    return {
      cash: 1000,
      inventory: [],
      currentCity: "New York",
      vehicleCapacity: 50,
      toys: Object.keys(baseToyPrices).map((name) => ({
        name,
        price: baseToyPrices[name],
      })),
      // Other default state variables
    };
  };

  const [gameState, setGameState] = useState(getInitialState());

  const rerollToyPrices = () => {
    setGameState((prevState) => ({
      ...prevState,
      toys: prevState.toys.map((toy) => ({
        ...toy,
        price: calculateNewPrice(baseToyPrices[toy.name]),
      })),
    }));
  };

  const calculateNewPrice = (basePrice) => {
    const variance = Math.random() * 0.5 - 0.25; // Random number between -0.25 and +0.25
    return Math.round(basePrice * (1 + variance));
  };

  const rerollPricesForStay = () => {
    setGameState((prevState) => ({
      ...prevState,
      toys: prevState.toys.map((toy) => ({
        ...toy,
        price: calculateAdjustedPrice(toy.price),
      })),
    }));
  };

  const calculateAdjustedPrice = (currentPrice) => {
    const variance = Math.random() * 0.5 - 0.25; // Random number between -0.25 and +0.25
    return Math.max(Math.round(currentPrice * (1 + variance)), 1); // Ensuring price doesn't go below 1
  };

  const setCurrentCity = (city) => {
    setGameState((prevState) => ({
      ...prevState,
      currentCity: city,
    }));
  };

  // Load game state from localStorage when the component mounts
  useEffect(() => {
    const savedGameState = localStorage.getItem("toyWarsGameState");
    try {
      if (savedGameState) {
        setGameState(JSON.parse(savedGameState));
      }
    } catch (error) {
      console.error("Failed to load saved game state:", error);
      // Handle the error or initialize a new game state
    }
  }, []);

  // Save game state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("toyWarsGameState", JSON.stringify(gameState));
  }, [gameState]);

  // Game logic functions go here
  // E.g., functions to handle buying, selling, changing cities, etc.

  return (
    <div>
      <h1>Toy Wars Game</h1>
      <Navigation
        currentCity={gameState.currentCity}
        setCurrentCity={setCurrentCity}
        gameState={gameState}
        setGameState={setGameState}
        rerollToyPrices={rerollToyPrices}
        rerollPricesForStay={rerollPricesForStay}
      />

      <Marketplace gameState={gameState} setGameState={setGameState} />
      <Inventory gameState={gameState} />
    </div>
  );
};

export default ToyWarsGame;
