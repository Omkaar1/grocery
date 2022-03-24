import React, { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryItem } from "./GroceryItem";

export default function Grocery(props) {
  const [grocery, setGrocery] = useState([]);

  const addGrocery = (data) => {
    setGrocery([...grocery, data]);
  };
  return (
    <div>
      <GroceryInput addGrocery={addGrocery} />
      {grocery.map((e) => (
        <GroceryItem item={e} onDelete={props.onDelete} />
      ))}
      {/* {props.grocery.length === 0
        ? "No grocery to display"
        : props.grocery.map((item) => {
            return <GroceryItem item={item} onDelete={props.onDelete} />;
          })} */}
    </div>
  );
}
