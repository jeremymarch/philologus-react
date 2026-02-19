import { useState } from "react";
import "./App.css";
import PhiloList from "./PhiloList";
import PhiloDef from "./PhiloDef";

function App() {
  const [selectedWord, setSelectedWord] = useState<{
    id: number;
    lexicon: string;
  } | null>(null);

  return (
    <>
      <PhiloList
        onWordSelect={(id, lexicon) => setSelectedWord({ id, lexicon })}
      />
      <PhiloDef
        wordId={selectedWord?.id ?? null}
        lexicon={selectedWord?.lexicon ?? null}
      />
    </>
  );
}

export default App;
