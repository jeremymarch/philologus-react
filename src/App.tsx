import "./App.css";
import PaddedList from "./MyList";
const names: string[] = [
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
  "Apple",
  "Orange",
  "Banana",
];
function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <PaddedList names={names} />
      <div className="def"></div>
    </>
  );
}

export default App;
