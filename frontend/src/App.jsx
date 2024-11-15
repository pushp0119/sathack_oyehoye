import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import NgoPage from './components/NgoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ngo" element={<NgoPage />} />
      </Routes>
    </Router>
  )
}

export default App
