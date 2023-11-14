import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
