import React from "react";
import SignInPage from "./components/SignInPage";
import "./App.css";
import GraphPage from "./components/GraphPage";

const App = () => {
  return (
    <div className="container">
      {/* <SignInPage /> */}
        <GraphPage />
    </div>
  );
};

export default App;
