import React from "react";
import "./Trusties.css";
const Trusties = () => {
  return (
    <div className="trusties">
      <p>Trusted By</p>
      <div className="companies">
        <div className="flex">
          <img className="inline" src="./images/cognizant.png"></img>
          <div className="outergroup">
            <div className="group1">
              <img
                className="inline margin"
                src="./images/logo-societe-generale.png"
              ></img>
              <div className="companies">
                <img className="inline" src="./images/cbre.png"></img>
                <img className="inline" src="./images/jll.png"></img>
              </div>
            </div>

            <div className="flex">
              <img className="inline" src="./images/emaar.png"></img>
              <img className="inline" src="./images/capitalland.png"></img>
            </div>
          </div>
        </div>
    
          <img className="inline" src="./images/chennaiinternational.png"></img>  
        
        

        <div className="flex">
          <img className="inline" src="./images/maxestates.png"></img>
          <img className="inline" src="./images/wework.png"></img>
        </div>

        <img className="inline" src="./images/visa.png"></img>

        <div className="flex">
          <img className="inline" src="./images/pepsico.png"></img>
          <img className="inline" src="./images/samsung.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Trusties;
