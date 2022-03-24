import React, { useState } from "react";

export const GroceryInput = ({ addGrocery }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addGrocery(input);
        }}
      >
        Add Grocery
      </button>
    </div>
  );
};
