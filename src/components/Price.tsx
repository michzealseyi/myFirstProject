//THIS FUNCTION COMPONENT IS USED TO OUTPUT THE NAME, AMOUNT, ETC IN A REQUIRED FORMAT
import React from "react";

function Price(props: any) {
  //this above function helps to collect the info from the props 'name' and 'amount' and pass it down thru
  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.amount}</p>
    </div>
  );
}

export default Price;
