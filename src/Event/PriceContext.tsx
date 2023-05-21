//STATE MANAGEMENT; UNDER WHICH WE FIND THE METHOD "CONTEXT"
import { useState, createContext } from "react";
export const PriceContext = createContext("");
export const PriceProvider = (props: any) => {
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
    <PriceContext.Provider value={[prices, setPrice]}>
      {props.children}
    </PriceContext.Provider>
  );
};
