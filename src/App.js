import React, { useState, Suspense, lazy } from "react";
import SearchParams from "./SearchParam";
import { Router } from "@reach/router";
//import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";

const Details = lazy(() => import("./Details"));
const App = () => {
  const theme = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
        <div>
          <NavBar />
          {/* <header>
            <Link to="/">Adopt Me!</Link>
          </header> */}
          <Suspense fallback={<h1>loading route …</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
export default App;
