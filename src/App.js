import React from "react";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Trusties from "./components/Introduction/Trusties";
import OptimiseInfo from "./components/OptimiseInfo/OptimiseInfo";
import ContactUs from "./components/Footer/ContactUs";
import Solutions from "./components/Solutions/Solutions";
import { Route, Router, Routes } from "react-router-dom";
import Career from "./components/Career/Career";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Introduction />
              {/* <Trusties /> */}
              <OptimiseInfo />
              
              <Solutions />
            </React.Fragment>
          }
        ></Route>

        <Route path="/career" element={<Career/>}/>
      </Routes>
    
      <ContactUs/> 
    </div>
  );
}

export default App;
