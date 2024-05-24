
import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Trusties from "./components/Introduction/Trusties";
import OptimiseInfo from "./components/OptimiseInfo/OptimiseInfo";
import ContactUs from "./components/Footer/ContactUs";


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
