import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState();
  const proxyURL = "/users/v1";

  async function getData() {
    axios
      .get(proxyURL)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <button onClick={getData}>Access server using proxy</button>
      <h1> Data: {data}</h1>
    </div>
  );
}

export default App;