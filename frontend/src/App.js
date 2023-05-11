import './App.css';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import MainLayout from './container/MainLayout';
import AuthLayout from './container/AuthLayout';
import Transfer from './components/Transfer/Transfer';

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
      <Route path="/transfer" element={<MainLayout />}>
        <Route path="/transfer" element={<Transfer />}></Route>
      </Route>
      <Route path="/" element={<AuthLayout />}>
      <Route path="/" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
