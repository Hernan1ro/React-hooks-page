import React from "react";
import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = React.useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="Header">
      <h1 style={{ color }}>React Hooks</h1>
      <button type="button" className="" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}
      </button>
      <button type="button" className="" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Dark Mode2" : "Light Mode2"}
      </button>
    </div>
  );
};

export default Header;
