import React, { Component } from "react";

class ExpenseEntryItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 1,
      name: "Grape Juice",
      amount: 30.5,
      spendDate: new Date("2020-10-10"),
      category: "Food",
    };
  }
  render() {
    return (
      <div>
        <div>
          <b>Item:</b> <em>{this.state.name}</em>
        </div>
        <div>
          <b>Amount:</b> <em>{this.state.amount}</em>
        </div>
        <div>
          <b>Spend Date:</b>
          <em>{this.state.spendDate.toString()}</em>
        </div>
        <div>
          <b>Category:</b> <em>{this.state.category}</em>
        </div>
      </div>
    );
  }
}
export default ExpenseEntryItem;

/*import React, { Component } from "react";

function ExpenseEntryItem() {
  const item = {
    id: 1,
    name: "Grape Juice",
    amount: 30.5,
    spendDate: new Date("2020-10-10"),
    category: "Food",
  };
  return (
    <div>
      <h1>Item:{item.name}</h1>
      <h1>Amount:{item.amount}</h1>
      <h1>Spend Date:{item.spendDate.toString()}</h1>
      <h1>Category:{item.category}</h1>
    </div>
  );
}
export default ExpenseEntryItem;*/

/*<h1>Item:{this.state.name}</h1>
        <h1>Amount:{this.state.amount}</h1>
        <h1>Spend Date:{this.state.spendDate.toString()}</h1>
        <h1>Category:{this.state.category}</h1> */
