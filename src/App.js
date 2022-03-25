import Album from "./components/album";
import Spotify from "./data/spotify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="app-header"></header>
      <body className="app-body">
        <div className="album-container">
          <Album />
        </div>
      </body>
    </div>
  );
}

export default App;
