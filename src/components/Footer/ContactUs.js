import React, { useState } from "react";
import style from "./ContactUs.module.css";
import { Link } from "react-router-dom";
import { useIsMobile } from "../../utils/screenSizeContext";

const ContactUs = () => {
  const isMobile = useIsMobile();
  function handleClick() {
    window.scrollTo(0, 0);
  }

  const [reactout, setreactout] = useState(false);
  const onClickReachOut = (e) => {
    e.preventDefault();
    setreactout((reactout) => {
      return !reactout;
    });
  };

  const [getStarted, setgetStarted] = useState(false);
  const onClickGetStarted = (e) => {
    e.preventDefault();
    setgetStarted((getStarted) => {
      return !getStarted;
    });
  };

  const [resources, setresources] = useState(false);
  const onClickResources = (e) => {
    e.preventDefault();
    setresources((resources) => {
      return !resources;
    });
  };
  return (
    <div className={style.outerflex}>
      <div className={style.contactinfo}>
        <div className={style.contact_sec1}>
          <span className={style.dropdownfooter} onClick={onClickReachOut}>
            <h3>Reach out to us at</h3>
            {isMobile ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <></>
            )}
          </span>

          {isMobile ? (
            reactout && (
              <ul className={style.info_sections}>
                <li className={style.info}>
                  <div className={style.phonenum}>
                    <img src="./images/icons/phone.png"></img>
                  </div>

                  <p>+91 9113622512</p>
                </li>

                <li className={style.info}>
                  <div className={style.emailing}>
                    <img src="./images/icons/email.png"></img>
                  </div>

                  <p>
                    For any general query, you can write to
                    <br />
                    the CEO at ​aayush@clairco.in
                    <br /> OR <br />
                    priyanka@clairco.in
                  </p>
                </li>

                <li className={style.info}>
                  <div className={style.location}>
                    <img src="./images/icons/location.png"></img>
                  </div>

                  <p>
                    G-1, 104
                    <br />
                    Sector 5 HSR Layout
                    <br />
                    Karnataka. 560034
                  </p>
                </li>
              </ul>
            )
          ) : (
            <ul className={style.info_sections}>
              <li className={style.info}>
                <div className={style.phonenum}>
                  <img src="./images/icons/phone.png"></img>
                </div>

                <p>+91 9113622512</p>
              </li>

              <li className={style.info}>
                <div className={style.emailing}>
                  <img src="./images/icons/email.png"></img>
                </div>

                <p>
                  For any general query, you can write to
                  <br />
                  the CEO at ​aayush@clairco.in
                  <br /> OR <br />
                  priyanka@clairco.in
                </p>
              </li>

              <li className={style.info}>
                <div className={style.location}>
                  <img src="./images/icons/location.png"></img>
                </div>

                <p>
                  G-1, 104
                  <br />
                  Sector 5 HSR Layout
                  <br />
                  Karnataka. 560034
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className={style.contact_sec2}>
          <span className={style.dropdownfooter} onClick={onClickGetStarted}>
            <h3>Want to Get Started?</h3>
            {isMobile ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <></>
            )}
          </span>

          {isMobile ? (
            getStarted && (
              <>
                {" "}
                <button className={style.clickResources}>Click Here</button>
                <h4>Follow Us On</h4>
                <img
                  className={style.linkedinlogo}
                  src="/images/icons/linkedin.png"
                  alt="linkedin logo"
                ></img>
              </>
            )
          ) : (
            <>
              <button className={style.clickResources}>Click Here</button>

              <h4>Follow Us On</h4>

              <img
                className={style.linkedinlogo}
                src="/images/icons/linkedin.png"
                alt="linkedin logo"
              ></img>
            </>
          )}
        </div>
        <div className={style.contact_sec3}>
          <span className={style.dropdownfooter} onClick={onClickResources}>
            <h3>Resources</h3>
            {isMobile ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.4001 7.4248L8.83343 12.8581C9.4751 13.4998 10.5251 13.4998 11.1668 12.8581L16.6001 7.4248"
                  stroke="white"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <></>
            )}
          </span>


          {isMobile ? (
            resources && (
              <div className={style.resourcelist}>
            <p>
              <Link className={style.link} to="/career" onClick={handleClick}>
                Career
              </Link>
            </p>
            <p>Blogs</p>
            <p>Our Solution</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Coorporate Governance</p>
          </div>
            )
          ) : (
            <div className={style.resourcelist}>
            <p>
              <Link className={style.link} to="/career" onClick={handleClick}>
                Career
              </Link>
            </p>
            <p>Blogs</p>
            <p>Our Solution</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Coorporate Governance</p>
          </div>
          )}
      
        </div>
      </div>
      <div className={style.copyright}>
        <p>
          (c) 2021 ALIFEROUS TECHNOLOGIES PVT LTD | CLAIRCO.IN | ALL RIGHTS
          RESERVED
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
