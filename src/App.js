import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParam";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
          ;
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
