import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
// Pages
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import Login from './pages/Login';
// Components
import Navbar from './components/Navbar';

function App() {
  const [data, setData] = useState();
  const proxyURL = '/users/v1';

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
      <Navbar />
      <button className="text-3xl font-bold underline" onClick={getData}>Access server using proxy</button>
      <h1>
        Data:
        {data}
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
