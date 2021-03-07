import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContainer } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <MainContainer />
      </div>
    </Router>
  );
}

export default App;
