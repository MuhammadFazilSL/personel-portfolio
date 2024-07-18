import React, { useState} from "react";
import {
  TOTAL_SCREENS,
} from "../../../utilities/commonUtils";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { Link } from "react-scroll";

export default function Header() {
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  

  window.addEventListener("scroll",()=>{
    const header_dom = document.querySelector(".header-parent");
    const navOffset_top = header_dom.clientHeight + 50;
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    if(scroll >= navOffset_top){
       header_dom.classList.add("navbar_fixed")
    }else{
      console.log("bottom")
      header_dom.classList.remove("navbar_fixed")
    }

  })

  const getHeaderOptions = () => {

    return TOTAL_SCREENS.map((Screen, i) => (
     <Link 
     to={Screen.screen_name} 
     smooth={true} 
     duration={500} 
     spy={true} 
     activeClass="selected-header-option " 
     key={Screen.screen_name}
     className="header-option header-option-seperator "
     offset={-110}
     >
       <div
        
      >
        <span>{Screen.screen_name}</span>
      </div>
     </Link>
    ));
  };

  return (
    <div
      className="header-container"
      onClick={() => setShowHeaderOptions(!showHeaderOptions)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOptions(!showHeaderOptions)}
        >
          <FontAwesomeIcon className="header-hmburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>FAZIL</span>
        </div>
        <div
          className={
            showHeaderOptions
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
}
