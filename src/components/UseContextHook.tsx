/*import { useState } from "react";

function MainApp() {
  const [user, setUser] = useState("admin");
  return (
    <div>
      <h2>Welcome {user}</h2>
      <User2 user={user} />
    </div>
  );
}

function User2({ user }: { user: string }) {
  return (
    <div>
      <p>User2 component</p>
      <h2>Welcome {user}</h2>
      <User3 user={user} />
    </div>
  );
}

function User3({ user }: { user: string }) {
  return (
    <div>
      <p>User3 component</p>
      <h2>Welcome {user}</h2>
    </div>
  );
}
export default MainApp;*/

import { useState, createContext } from "react";
const appContext = createContext("light");
function MainApp() {
  const [user, setUser] = useState("admin");
  return (
    <div>
      <appContext.Provider value={user}>
        <h2>Welcome {user}</h2>
        <User2 />
      </appContext.Provider>
    </div>
  );
}

function User2() {
  return (
    <div>
      <p>User2 component</p>
      <User3 />
    </div>
  );
}

function User3() {
  return (
    <div>
      <p>User3 component</p>
    </div>
  );
}
export default MainApp;
