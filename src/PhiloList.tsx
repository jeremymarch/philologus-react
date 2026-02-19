import React, { useState, useEffect, useCallback } from "react";
import { List, type RowComponentProps } from "react-window";
import axios from "axios";
import { useDebounce } from "./useDebounce";

type PhiloRowItem = [number, string];

// {
//   "selectId": 110755,
//     "error": "",
//     "wtprefix": "lemmata",
//     "nocache": 0,
//     "container": "lemmataContainer",
//     "requestTime": 1771459324274,
//     "page": 0,
//     "lastPage": 0,
//     "lastPageUp": 0,
//       "query": "φερ",
//     "arrOptions": [[110654, "φατνωτός"], [110655, "φατός"

interface ResponseData {
  selectId: number;
  error: string;
  wtprefix: string;
  nocache: number;
  container: string;
  requestTime: number;
  page: number;
  lastPage: number;
  lastPageUp: number;
  query: string;
  arrOptions: Array<PhiloRowItem>;
}

interface PhiloListProps {
  onWordSelect: (id: number, lexicon: string) => void;
}

const PhiloList = ({ onWordSelect }: PhiloListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [lexicon, setLexicon] = useState("lsj");
  const [results, setResults] = useState<ResponseData>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  const fetchData = useCallback(
    async (query: string, currentLexicon: string) => {
      // if (!query) {
      //   setResults(undefined);
      //   return;
      // }

      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get<ResponseData>(
          `query?&query=%7B%22regex%22%3A0%2C%22lexicon%22%3A%22${currentLexicon}%22%2C%22tag_id%22%3A0%2C%22root_id%22%3A0%2C%22w%22%3A%22${query}%22%7D&n=101&idprefix=lemmata&x=0.17297130510758496&requestTime=1771393815484&page=0&mode=context`,
        );
        setResults(response.data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchData(debouncedSearchTerm, lexicon);
  }, [debouncedSearchTerm, lexicon, fetchData]);

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  function PhiloListRowComponent({
    index,
    results,
    style,
  }: RowComponentProps<{
    results: ResponseData | undefined;
  }>) {
    if (results !== undefined) {
      const wordId = results.arrOptions[index][0];
      return (
        <div
          className="philorow"
          data-wordid={wordId}
          data-lexicon={lexicon}
          style={style}
          onClick={() => onWordSelect(wordId, lexicon)}
        >
          {results.arrOptions[index][1]}
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div className="philolistcontainer">
      <div className="philobuttons">
        <button
          onClick={() => setLexicon("lsj")}
          disabled={lexicon === "lsj"}
          className={lexicon === "lsj" ? "active" : ""}
        >
          LSJ
        </button>
        <button
          onClick={() => setLexicon("slater")}
          disabled={lexicon === "slater"}
          className={lexicon === "slater" ? "active" : ""}
        >
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
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <List
        rowProps={{ results }}
        rowComponent={PhiloListRowComponent}
        rowCount={results?.arrOptions?.length ?? 0}
        rowHeight={40}
        style={{ width: 260, height: "calc(100% - 120px)" }}
        className="philolist"
      />
    </div>
  );
};

export default PhiloList;
