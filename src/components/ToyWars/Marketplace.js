import React from "react";
import "./ToyWars.css";

const Marketplace = ({ gameState, setGameState }) => {
  const toys = gameState.toys;

  const addToInventory = (toy, inventoryToUpdate = gameState.inventory) => {
    const inventory = [...inventoryToUpdate];
    const existingToy = inventory.find((item) => item.name === toy.name);

    if (existingToy) {
      existingToy.quantity += 1;
    } else {
      inventory.push({ ...toy, quantity: 1 });
    }

    return inventory;
  };

  const removeFromInventory = (
    toy,
    inventoryToUpdate = gameState.inventory
  ) => {
    const inventory = [...inventoryToUpdate];
    const toyIndex = inventory.findIndex(
      (item) => item.name === toy.name && item.quantity > 0
    );

    if (toyIndex > -1) {
      inventory[toyIndex].quantity -= 1;
      if (inventory[toyIndex].quantity === 0) {
        inventory.splice(toyIndex, 1);
      }
    }

    return inventory;
  };

  // Optimized buyToy function
  const buyToy = (toy) => {
    const totalToys = gameState.inventory.reduce(
      (total, item) => total + item.quantity,
      0
    );
    if (gameState.cash >= toy.price && totalToys < gameState.vehicleCapacity) {
      const updatedInventory = addToInventory(toy);
      setGameState((prevState) => ({
        ...prevState,
        cash: prevState.cash - toy.price,
        inventory: updatedInventory,
      }));
    } else {
      alert("Not enough cash or vehicle capacity to buy this toy");
    }
  };

  // Optimized sellToy function
  const sellToy = (toy) => {
    if (
      gameState.inventory.some(
        (item) => item.name === toy.name && item.quantity > 0
      )
    ) {
      const updatedInventory = removeFromInventory(toy);
      setGameState((prevState) => ({
        ...prevState,
        cash: prevState.cash + toy.price,
        inventory: updatedInventory,
      }));
    } else {
      alert("You don't have this toy to sell");
    }
  };

  const buyAllOfToy = (toy) => {
    let updatedCash = gameState.cash;
    let updatedInventory = [...gameState.inventory];

    const totalToys = updatedInventory.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const availableSpace = gameState.vehicleCapacity - totalToys;

    const maxAffordableQuantity = Math.floor(updatedCash / toy.price);
    const maxQuantity = Math.min(maxAffordableQuantity, availableSpace);

    if (maxQuantity <= 0) {
      alert("Not enough cash or vehicle capacity to buy more of this toy");
      return; // Exit the function early
    }

    for (let i = 0; i < maxQuantity; i++) {
      updatedCash -= toy.price;
      updatedInventory = addToInventory(toy, updatedInventory);
    }

    setGameState((prevState) => ({
      ...prevState,
      cash: updatedCash,
      inventory: updatedInventory,
    }));
  };

  const sellAllOfToy = (toy) => {
    const updatedInventory = gameState.inventory.filter(
      (item) => item.name !== toy.name
    );
    const toyInInventory = gameState.inventory.find(
      (item) => item.name === toy.name
    );
    const updatedCash = toyInInventory
      ? gameState.cash + toy.price * toyInInventory.quantity
      : gameState.cash;

    setGameState((prevState) => ({
      ...prevState,
      cash: updatedCash,
      inventory: updatedInventory,
    }));
  };

  return (
    <div className="marketplace-grid">
      {toys.map((toy) => (
        <React.Fragment key={toy.name}>
          <div className="marketplace-name">{toy.name}</div>
          <div className="marketplace-price">${toy.price}</div>
          <div className="marketplace-actions">
            <button onClick={() => buyToy(toy)}>Buy</button>
            <button onClick={() => sellToy(toy)}>Sell</button>
            <button onClick={() => buyAllOfToy(toy)}>Buy All</button>
            <button onClick={() => sellAllOfToy(toy)}>Sell All</button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Marketplace;
