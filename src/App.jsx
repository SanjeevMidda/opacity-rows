import "./index.css";
import Color from "./components/Color";

function App() {
  return (
    <div className="App">
      <Color delay="0s" />
      <Color delay="0.3s" />
      <Color delay="0.6s" />
      <Color delay="0.9s" />
      <Color delay="1.2s" />
    </div>
  );
}

export default App;
