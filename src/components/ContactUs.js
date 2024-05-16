import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="contactinfo">
      <div className="contact-sec1">
        <h3>Reach out to us at</h3>
        <ul className="info-sections">
          <li className="info">
            <div className="phonenum" >
                 <img src="./images/icons/phone.png"></img>
            </div>
           
            <p>+91 9113622512</p>
          </li>

          <li className="info">
            <div className="emailing">
                 <img  src="./images/icons/email.png"></img>
            </div>
           
            <p>
              For any general query, you can write to
              <p>the CEO at ​aayush@clairco.in</p> OR <p>priyanka@clairco.in</p>
            </p>
          </li>

          <li className="info">
            <div className="location">
                <img  src="./images/icons/location.png"></img>
            </div>
            
            <p>G-1, 104<p>Sector 5 HSR Layout</p><p>Karnataka. 560034</p></p>
          </li>
        </ul>
      </div>
      <div>Want to Get Started?</div>
      <div>Resources</div>
    </div>
  );
};

export default ContactUs;
