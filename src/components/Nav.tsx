import React, { useContext } from "react";
import PriceContext from "./PriceContext";
const Nav = () => {
  const [prices, setPrice] = useContext(PriceContext);
  return (
    <div>
      <h3>OWOLABI</h3>
      <p>LIST OF PRICE:{prices.length}</p>
    </div>
  );
};

export default Nav;
