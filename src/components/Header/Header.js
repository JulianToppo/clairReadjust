import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import Navbar from "./Navbar";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [openDropDown,setOpenDropDown]= useState(false)

  const handleResize = () => {
    if (window.innerWidth < 830) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ondropDownClickHandler=(e)=>{
    e.preventDefault();
    setOpenDropDown(!openDropDown)
  }

  return (
    <div className={style.header}>
      <img src="./images/logo.png" alt="logo"></img>
      {isMobile ? 
        openDropDown==true?
        <Navbar toggleShow={setOpenDropDown} openDropDown={openDropDown} isMobileVersion={isMobile}/>
          :<img
          className={style.navbar_dropdown}
          src={"/images/icons/dropdownsettings.png"}

          onClick={ondropDownClickHandler}
        ></img>
       : (
        <Navbar isMobileVersion={isMobile}/>
      )}
    </div>
  );
};

export default Header;
