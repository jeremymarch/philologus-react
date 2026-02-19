
when a list row is clicked please add a "selectedrow" class and at the same time remove this class from any other row which might have the class "selectedrow".

I will modify `PhiloList.tsx` to manage the selected row state. I'll add a `selectedWordId` state variable to track the currently selected word ID. Then, I'll update the `PhiloListRowComponent` to check if the current row's word ID matches `selectedWordId` and apply the "selectedrow" class conditionally. The `onClick` handler will update both the parent component (via `onWordSelect`) and the local `selectedWordId` state.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);
  const [selectedWordId, setSelectedWordId] = useState<number | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 250);

    if (results !== undefined) {
      const wordId = results.arrOptions[index][0];
      const isSelected = wordId === selectedWordId;
      return (
        <div
          className="philorow"
          className={`philorow ${isSelected ? "selectedrow" : ""}`}
          data-wordid={wordId}
          data-lexicon={lexicon}
          style={style}
          onClick={() => onWordSelect(wordId, lexicon)}
          onClick={() => {
            setSelectedWordId(wordId);
            onWordSelect(wordId, lexicon);
          }}
        >
          {results.arrOptions[index][1]}
        </div>
        </button>
        <button
          onClick={() => setLexicon("autenrieth")}
          disabled={lexicon === "autenrieth"}
          className={lexicon === "autenrieth" ? "active" : ""}
        >
          Autenrieth
        </button>
        <button
          onClick={() => setLexicon("slater")}
          disabled={lexicon === "slater"}
          className={lexicon === "slater" ? "active" : ""}
          Slater
        </button>
        <button
          onClick={() => setLexicon("ls")}
          disabled={lexicon === "ls"}
          className={lexicon === "ls" ? "active" : ""}
        >
          Lewis & Short
        </button>
      </div>
      <input
        className="philosearch"
        rowCount={results?.arrOptions?.length ?? 0}
        rowHeight={40}
        style={{ width: 260, height: "calc(100% - 120px)" }}
        style={{ width: 260, height: "calc(100% - 126px)" }}
        className="philolist"
      />
    </div>
    
how to make the list set the selectedrow class on the row whose wordId matches the selectId variable in the returned ResponseData and scroll that row to the middle of the list?
