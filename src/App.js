import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("render");
    const fetchData = async () => {
      const result = await axios.get("https://picsum.photos/v2/list");
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
