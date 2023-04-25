import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage';
import FAQ from './containers/FAQ';
import Navbar from './components/Navbar/Navbar';
import Authentication from './containers/Authentication';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
