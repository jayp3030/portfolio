import React from "react";
import logo from "../imgs/web/icon-512.png";
export default function Nav() {
    const opennav = () =>{
        document.getElementById('responsiveNav').style.transform = 'translateY(0rem)'
        document.getElementById('ham').style.display = 'none'
        document.getElementById('cross').style.display = 'block'
    }
    const closenav = () =>{
        document.getElementById('responsiveNav').style.transform = 'translateY(-13.5rem)'
        document.getElementById('cross').style.display = 'none'
        document.getElementById('ham').style.display = 'block'
    }
  return (
    <>
      <nav className="navbar">
        <div className="navLeft">
          <div>
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>
        <div className="navRight">
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about me</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            {/* <li><a href="#">contact me</a></li> */}
          </ul>
          <div className="hamburger">
          <i className="fa-solid fa-bars" onClick={opennav} id='ham'></i>
          <i className="fa-solid fa-xmark" onClick={closenav} id="cross"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
