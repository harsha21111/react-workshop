import React, { Suspense, lazy } from "react";
import SearchParams from "./SearchParam";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "./store";

const Details = lazy(() => import("./Details"));
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <Suspense fallback={<h1>loading route …</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </Provider>
  );
};
export default App;
