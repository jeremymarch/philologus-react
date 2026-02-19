interface PhiloDefProps {
  wordId: number | null;
}

const PhiloDef = ({ wordId }: PhiloDefProps) => {
  return (
    <div className="philodef">
      {wordId !== null ? `Selected Word ID: ${wordId}` : "Select a word"}
    </div>
  );
};

export default PhiloDef;
