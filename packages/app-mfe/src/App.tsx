import "./App.css";
import { Layer1, Layer2 } from "./features";
import { Layer3 } from "./features/Layer3";

function App() {
  return (
    <div className="App">
      <Layer1>
        <Layer2>
          <Layer3>fully nested</Layer3>
        </Layer2>
      </Layer1>
    </div>
  );
}

export default App;
