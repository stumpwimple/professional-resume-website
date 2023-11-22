import React from "react";

const Inventory = ({ gameState }) => {
  // Assuming inventory items have a structure like: { name: 'Toy Name', quantity: X }
  return (
    <div>
      <h2>Inventory</h2>
      <p>Cash: ${gameState.cash}</p>
      <p>Vehicle Capacity: {gameState.vehicleCapacity}</p>
      <ul>
        {gameState.inventory.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
