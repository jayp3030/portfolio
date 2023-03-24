import React from "react";

export default function ResponsiveNavbar() {
    const closenav = () =>{
        document.getElementById('responsiveNav').style.transform = 'translateY(-13.5rem)'
        document.getElementById('cross').style.display = 'none'
        document.getElementById('ham').style.display = 'block'
    }
  return (
    <div className="responsiveNavbar" id="responsiveNav">
      <div className="navWrapper">
        {/* <i className="fa-solid fa-xmark"></i> */}

        <a href="#home" onClick={closenav}>home</a>
        <a href="#about" onClick={closenav}>about me</a>
        <a href="#projects" onClick={closenav}>projects</a>
      </div>
      <div className="responsiveLinks">
          <a href="mailto:jayp46157@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/jayp3030"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jay-n-prajapati-34519620b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          </div>
    </div>
  );
}
