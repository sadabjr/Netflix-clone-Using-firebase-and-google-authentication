import React, { useEffect, useState } from "react";
import "./Nav.css";
import Avatar from "../assets/avatar.png";
import Logo from "../assets/N logo.png"

const Nav = () => {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return() => window.removeEventListener("scroll", transitionNavBar);
    }, [])



  return (
    <div className={`nav ${show &&'nav_black'}`}>
      <div className="nav__contents">
        <img
          className="nav_logo"
          src={Logo}
          alt="logo"
        />

        <img className="nav_avatar" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
