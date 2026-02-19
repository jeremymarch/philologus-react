import { useState } from "react";
import "./App.css";
import PhiloList from "./PhiloList";
import PhiloDef from "./PhiloDef";

function App() {
  const [selectedWordId, setSelectedWordId] = useState<number | null>(null);

  return (
    <>
      <PhiloList onWordSelect={setSelectedWordId} />
      <PhiloDef wordId={selectedWordId} />
    </>
  );
}

export default App;
