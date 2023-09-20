import { createContext, useState } from 'react';
import './App.css';
import Home from "./pages/Home";
import ReactSwitch from 'react-switch';


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>

        <Home />
        <div className="switch">
          <ReactSwitch onChange={toggleTheme}
            checked={theme === 'dark'}
            checkedIcon={<i class="ri-sun-line"></i>}
            uncheckedIcon={<i class="ri-moon-line"></i>}
            offColor='#f0f8ff'
            onColor='#040D12' />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
