import React, { useEffect, useState, useHistory } from "react";
import "./Nav.css";
import Avatar from "../assets/avatar.png";
import Logo from "../assets/N logo.png"


const Nav = () => {
    const [show, handleShow] = useState(false);

    const history = useHistory();

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
        onClick={() => history.push("/")}
          className="nav_logo"
          src={Logo}
          alt="logo"
        />

        <img onClick={() => history.push("/profile")} className="nav_avatar" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
