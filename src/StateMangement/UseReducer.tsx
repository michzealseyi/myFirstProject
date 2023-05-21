/*import { useReducer } from "react";

function Reduce() {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
      }
    },
    { names: [], name: "" }
  );
  return (
    <div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <div>Name={state.name}</div>
    </div>
  );
}
export default Reduce;*/

/*import { useReducer } from "react";

function Reduce() {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    { names: [], name: "" }
  );
  return (
    <div> 
      <ul>
        {state.names.map((name: any, index: any) => (
          <div key={index}>{name}</div>
        ))}
      </ul>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <div>
        <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
      </div>
    </div>
  );
}
export default Reduce;*/
//SEARCH OPTIONS
import { useReducer } from "react";
function UserForm() {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First={state.first}</div>
      <div> Last={state.last}</div>
    </div>
  );
}

//INPUT AND DISPLAY/SAVE
function Reduce() {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    { names: [], name: "" }
  );
  return (
    <div>
      <ul>
        {state.names.map((name: any, index: any) => (
          <div key={index}>{name}</div>
        ))}
      </ul>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <div>
        <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
      </div>
    </div>
  );
}
function App() {
  return (
    <div>
      <UserForm />
      <Reduce />
    </div>
  );
}

export default App;
