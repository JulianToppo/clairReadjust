import React from 'react'
import style from "./Header.module.css";

const Navbar = (props) => {
    const { isMobileVersion } = props;

    console.log(isMobileVersion)
    const toggle = (e) => {
     
      if (isMobileVersion == true) {
        const { toggleShow, openDropDown } = props;
        toggleShow(!openDropDown)
      }
    };
  return (
     <div className={style.navbar} onClick={toggle}>


        <ul className={style.navbar_items}>
          <li>Home</li>
          <li>Why Clairco?</li>
          <li>Case Studies</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>

        <button className={style.login_button}>Login</button>
      </div>
  )
}

export default Navbar