//to make use of <span>, or any other html component, the argument for 'childen' as to be ReactNode

//import ExpenseEntryItem from "./components/SimpCompUsingProps";
//import ExpenseEntryItem1 from "./components/NestedComp";
import React, { Component } from "react";
//import Click from "./components/Click";
//import Counter from "./components/Counter";
//import EventHandling from "./components/EventHandling";
import Nav from "./Nav";
import PriceList from "./EventHandling";
import { PriceProvider } from "./PriceContext";
export class App extends Component {
  render() {
    return (
      <PriceProvider>
        <div>
          <Nav />
          <PriceList />
        </div>
      </PriceProvider>
    );
  }
}

export default App;
