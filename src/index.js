import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeContext from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value="red">
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
