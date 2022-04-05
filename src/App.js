import React, { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { theme } = useTheme()
  return (
    <div className="App bg-warning">
      <Navbar/>
      
        
    </div>
  );
}

export default App;
