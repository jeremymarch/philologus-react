interface PhiloDefProps {
  wordId: number | null;
  lexicon: string | null;
}

const PhiloDef = ({ wordId, lexicon }: PhiloDefProps) => {
  return (
    <div className="philodef">
      {wordId !== null
        ? `Selected Word ID: ${wordId}, Lexicon: ${lexicon}`
        : "Select a word"}
    </div>
  );
};

export default PhiloDef;
