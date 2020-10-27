import './App.css';
import React from "react"
import SearchMovies from "./components/SearchMovies"


function App() {
  return (
    <div className="App">
      <h1 className="title">React Movie Search App</h1>
        <SearchMovies />
    </div>
  );
}

export default App;
