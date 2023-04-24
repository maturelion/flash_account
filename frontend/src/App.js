import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
