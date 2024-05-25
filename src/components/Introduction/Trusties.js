import React from "react";
import style from "./Trusties.module.css";

const Trusties = () => {
  return (
    <div className={style.trusties}>
      <p>Trusted By</p>
      <div className={style.companies}>
        <div className={style.flex}>
          <img className={style.inline} src="./images/cognizant.png"></img>
          <div className={style.outergroup}>
            <div className={style.group1}>
              <img
                className={`${style.inline} ${style.margin}`}
                src="./images/logo-societe-generale.png"
              ></img>
              <div className={style.companies}>
                <img className={style.inline} src="./images/cbre.png"></img>
                <img className={style.inline} src="./images/jll.png"></img>
              </div>
            </div>

            <div className={style.flex}>
              <img className={style.inline} src="./images/emaar.png"></img>
              <img
                className={style.inline}
                src="./images/capitalland.png"
              ></img>
            </div>
          </div>
        </div>

        <img
          className={style.inline}
          src="./images/chennaiinternational.png"
        ></img>

        <div className={style.flex}>
          <img className={style.inline} src="./images/maxestates.png"></img>
          <img className={style.inline} src="./images/wework.png"></img>
        </div>

        <img className={style.inline} src="./images/visa.png"></img>

        <div className={style.flex}>
          <img className={style.inline} src="./images/pepsico.png"></img>
          <img className={style.inline} src="./images/samsung.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Trusties;
