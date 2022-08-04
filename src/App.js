import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <div className="app">
      <div className="app-header">Tetris</div>
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
