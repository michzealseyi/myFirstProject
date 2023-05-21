/*import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(10);
  //THE FUNCTION IS BEING DEFINED BELOW
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="UseState">
      <button onClick={addOne}>Count={count}</button>
    </div>
  );
}

function Cola() {
  return (
    <div>
      <UseState />
      <UseState />
      <UseState />
    </div>
  );
}
export default Cola;
//{addOne} is a function
*/

import { useState } from "react";
function NameList() {
  const [list, setList] = useState(["michael", "seyi", "timi"]);
  const [name, setName] = useState("");
  const addName = () => {
    setList([...list, name]);
    //U CAN EITHER ADD THE BELOW OR NOT,ITS OPTIONAL
    //IT ALSO HELPS TO CLEAR THE BOX
    setName("");
  };
  //MAPPING IS FOR RETURNING ARRAY STATES
  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}
//YOU CAN ALTERNATIVELY DEFINE A FUNCTION INSIDE A RETURN BRACKET INSTEAD OF DEFINING IT SEPERATELY
function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTotal = count1 + count2;
  return (
    <div>
      <button onClick={() => setCount1(count1 + 1)}>Count1:{count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Count2:{count2}</button>

      <div>Total:{countTotal}</div>
    </div>
  );
}
function UseState() {
  const [count, setCount] = useState(10);
  //THE FUNCTION IS BEING DEFINED BELOW
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="UseState">
      <button onClick={addOne}>Count={count}</button>
    </div>
  );
}

function Cola() {
  return (
    <div>
      <UseState />
      <NameList />
      <Counter />
    </div>
  );
}
export default Cola;
//{addOne} is a function
//USESTATE CAN ALSO TAKE A FUNCTION AS A STARTING POINT; useState(()=>"Jack")
