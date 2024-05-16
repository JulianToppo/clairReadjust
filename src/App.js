import Header from "./components/Header";
import React from "react";
import Introduction from "./components/Introduction";
import Trusties from "./components/Trusties";
import OptimiseInfo from "./components/OptimiseInfo";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <Header/>
      <Introduction/>
      <Trusties/>
      <OptimiseInfo/>

      <ContactUs/>
    </div>
  );
}

export default App;
