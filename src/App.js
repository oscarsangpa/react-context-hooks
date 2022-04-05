import React, { useContext } from 'react';
import { Route, Routes} from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Users from './views/Users/Users';
import Comments from './views/Albums/Albums';
import './App.css';

function App() {
  const { theme } = useTheme()
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="users" element={<Users/>} />
          <Route path="albums" element={<Comments/>} />
        </Routes>
      </div>
        
    </div>
  );
}

export default App;
