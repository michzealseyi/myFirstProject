/*import React, { useState } from "react";

function PriceList() {
  //THIS IS A STATE BELOW
  const [prices, setPrice] = useState([
    {
      id: 1,
      name: "Pizza",
      amount: 80,
      spendDate: "2020-10-10",
      category: "Food",
    },
    {
      id: 1,
      name: "Grape Juice",
      amount: 30,
      spendDate: "2020-10-12",
      category: "Food",
    },
    {
      id: 1,
      name: "Cinema",
      amount: 210,
      spendDate: "2020-10-16",
      category: "Entertainment",
    },
  ]);
  return (
    <div>
      {prices.map((price) => (
        <h3>{price.name}</h3>
      ))}
    </div>
  );
}
export default PriceList;*/

/*import React, { useState } from "react";
import Price from "./Price";
function PriceList() {
  //THIS IS A STATE BELOW
  const [prices, setPrice] = useState([
    {
      id: 1,
      name: "Pizza",
      amount: 80,
      spendDate: "2020-10-10",
      category: "Food",
    },
    {
      id: 2,
      name: "Grape Juice",
      amount: 30,
      spendDate: "2020-10-12",
      category: "Food",
    },
    {
      id: 3,
      name: "Cinema",
      amount: 210,
      spendDate: "2020-10-16",
      category: "Entertainment",
    },
  ]);
  return (
    <div>
      {prices.map((price) => (
        <Price name={price.name} amount={price.amount} key={price.id} /> //THE PROPS'name' & 'amount', etc HELPS TO PASS DOWN INFO TO 'Price.tsx' to access
      ))}
    </div>
  );
}
export default PriceList;*/

import React, { useState, useContext } from "react";
import Price from "../Practice/Price";
import { PriceContext } from "./PriceContext";
const PriceList = () => {
  const [prices, setPrice] = useContext(PriceContext);
  return (
    <div>
      {prices.map((price: any) => (
        <Price name={price.name} amount={price.amount} key={price.id} /> //THE PROPS'name' & 'amount', etc HELPS TO PASS DOWN INFO TO 'Price.tsx' to access
      ))}
    </div>
  );
};
export default PriceList;
