/*import MainApp from "./components/UseContextHook";
import Hooks from "./components/Hooks";
import ParentComp from "./components/ParentComp";
function App() {
  return (
    <div>
      <ParentComp />
    </div>
  );
}
export default App;*/

/*import React from "react";
import Cola from "./StateMangement/UseState";
export default function App() {
  return (
    <div>
      <Cola />
    </div>
  );
}*/

/*import ExpenseEntryItem1 from "./components/NestedComp";
import React, { Component } from "react";
import Click from "./components/Click";
import Counter from "./components/Counter";
import EventHandling from "./components/EventHandling";
import Nav from "./components/Nav";
import PriceList from "./components/EventHandling";
import { PriceProvider } from "./components/PriceContext";
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
}*/

import React from "react";
import MainApp from "./StateMangement/BeginnerCreateContext";
function App() {
  return (
    <div>
      <MainApp />
    </div>
  );
}
export default App;
