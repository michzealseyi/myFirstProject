import React from "react";
import "./FirstPractice.css";
class ExpenseEntryItemList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = [
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
      {
        id: 1,
        name: "Java Programming book",
        amount: 242,
        spendDate: "2020-10-15",
        category: "Academic",
      },
      {
        id: 1,
        name: "Mango Juice",
        amount: 35,
        spendDate: "2020-10-16",
        category: "Food",
      },
      {
        id: 1,
        name: "Dress",
        amount: 2000,
        spendDate: "2020-10-25",
        category: "Cloth",
      },
      {
        id: 1,
        name: "Tour",
        amount: 2555,
        spendDate: "2020-10-29",
        category: "Entertainment",
      },
      {
        id: 1,
        name: "Meals",
        amount: 300,
        spendDate: "2020-10-30",
        category: "Food",
      },
      {
        id: 1,
        name: "Mobile",
        amount: 3500,
        spendDate: "2020-11-02",
        category: "Gadgets",
      },
      {
        id: 1,
        name: "Exam Fees",
        amount: 1245,
        spendDate: "2020-11-04",
        category: "Academic",
      },
    ];
  }
  render() {
    const lists = this.state.map((item: any) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.amount}</td>
        <td>{new Date(item.spendDate).toDateString()}</td>
        <td>{item.category}</td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{lists}</tbody>
      </table>
    );
  }
}
export default ExpenseEntryItemList;
