import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/track-page";
import TrackPage from "./pages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TrackPage />
      </header>
    </div>
  );
}

export default App;
