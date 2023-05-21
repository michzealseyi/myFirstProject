//ONE OF THE THINGS WE USE USEEFFECT TO DO IS TO MAKE API REQUESTS, JSON
/*import { useState, useEffect } from "react";
function App() {
  const [names, setNames] = useState([]);
  useEffect(() => {
    //IT PREVENTS AN INFINITE LOOP
    fetch("/name.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);
  //THE DATA COLLECTED BY THE 'selectedName useEffect' IS STORED THRU THE FUNCTION BELOW
  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  const onSelectedNameChange = (name: any) => {
    fetch("/${name}.json")
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };
  return (
    <div>
      <div>
        {names.map((name) => (
          <button onClick={() => onSelectedNameChange(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(selectedNameDetails)}</div>
    </div>
  );
}
export default App;*/

import { useEffect, useState } from "react";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>Time:{time}</div>
    </div>
  );
};
function App() {
  return (
    <div>
      <Stopwatch />
    </div>
  );
}
export default App;
