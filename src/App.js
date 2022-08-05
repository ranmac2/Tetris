import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="app">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
