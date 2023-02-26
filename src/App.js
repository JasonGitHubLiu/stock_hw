import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Nav from './components/Nav';
import Stock from './components/Stock';

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks" element={<Dashboard />} />
        <Route path="/stocks/:symbol" element={<Stock />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
