/*import { useState, useEffect } from "react";
//BELOW IS A CUSTOMHOOK "useNewnames"
interface Newname {
  id: number;
  name: string;
  amount: number;
  spendDate: any;
  category: string;
}
function useNewnames(){
  const [newnames, setNewnames] = useState<Newname[]>([]);
  useEffect(() => {
    fetch("/newnames.json")
      .then((response) => response.json())
      .then((data) => setNewnames(data));
  }, []);
  return { newnames };
}
function App() {
  const { newnames } = useNewnames();
  return <div>{JSON.stringify(newnames)}</div>;
}

export default App;*/

/*import { useState, useEffect } from "react";
//BELOW IS A CUSTOMHOOK "useNewnames"
interface Newname {
  id: number;
  name: string;
  amount: number;
  spendDate: any;
  category: string;
}
function useNewnames() {
  const [newnames, setNewnames] = useState<Newname[]>([]);
  useEffect(() => {
    fetch("/newnames.json")
      .then((response) => response.json())
      .then((data) => setNewnames(data));
  }, []);
  return { newnames };
}

const NewnamesList = ({ newnames }: { newnames: Newnames[] }) => {
  return (
    <div>
      {newnames.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  const { newnames } = useNewnames();
  return <NewnamesList newnames={newnames} />;
}

export default App;*/

import { useState, useEffect, createContext } from "react";
//BELOW IS A CUSTOMHOOK "useNewnames"
interface Newname {
  id: number;
  name: string;
  amount: number;
  spendDate: any;
  category: string;
}
function useNewnames() {
  const [newnames, setNewnames] = useState<Newname[]>([]);
  useEffect(() => {
    fetch("/newnames.json")
      .then((response) => response.json())
      .then((data) => setNewnames(data));
  }, []);
  return { newnames };
}

const NewnamesList = ({ newnames }: { newnames: Newnames[] }) => {
  return (
    <div>
      {newnames.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

function App() {
  const { newnames } = useNewnames();
  return <NewnamesList newnames={newnames} />;
}

export default App;
