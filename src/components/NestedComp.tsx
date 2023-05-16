import React, { Component } from "react";
import FormattedMoney from "./NestFormMon";
import FormattedDate from "./NestFormDate";
class ExpenseEntryItem1 extends React.Component<any, any> {
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
          <b>Amount:</b>
          <em>
            <FormattedMoney amount={this.state.amount} />
          </em>
        </div>
        <div>
          <b>Spend Date:</b>
          <em>
            <FormattedDate spendDate={this.state.spendDate} />
          </em>
        </div>
        <div>
          <b>Category:</b> <em>{this.state.category}</em>
        </div>
      </div>
    );
  }
}
export default ExpenseEntryItem1;
