import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage';
import FAQ from './containers/FAQ';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
