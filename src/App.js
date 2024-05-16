import Header from "./components/Header";
import React from "react";
import Introduction from "./components/Introduction";
import Trusties from "./components/Trusties";
import OptimiseInfo from "./components/OptimiseInfo";

function App() {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Trusties/>
      <OptimiseInfo/>
    </div>
  );
}

export default App;
