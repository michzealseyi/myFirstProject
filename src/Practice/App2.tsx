/*import ListGroup1 from "./components/ListGroup";

function App() {
  return (
    <div>
      <ListGroup1 />
    </div>
  );
}
export default App;*/

//PASSING DATA VIA PROPS/PROPERTY
/*import ListGroup1 from "./components/ListGroup";

function App() {
  let items = ["Canada", "Nigeria", "America"];

  return (
    <div>
      <ListGroup1 items={items} heading="Cites" />
    </div>
  );
}
export default App;*/

//PASSING FUNCTIONS VIA PROPS/PROPERTY
/*import ListGroup1 from "../components/ListGroup2";

function App() {
  let items = ["Canada", "Nigeria", "America"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup1
        items={items}
        heading="Cites"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;*/

//CHILDREN

//SIMPLE COMPONENT USING PROPERTIES

/*import React from "react";
import ExpenseEntryItem from "./SimpCompUsingProps";
function App2() {
  var item = {
    id: 1,
    name: "Grape Juice",
    amount: 30.5,
    spendDate: new Date("2020-10-10"),
    category: "Food",
  };
  return (
    <div>
      <ExpenseEntryItem item={item} />
    </div>
  );
}*/
