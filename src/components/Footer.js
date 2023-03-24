import React from "react";


export default function Footer() {
  return (
    <div className="footer">
      <div className="info_wrapper">
        <div className="info">
          <h2>JAY PRAJAPATI</h2>
          <p>MERN Stack developer & JAVA programmer</p>
          <p>
            <a href="mailto:jayp46157@gmail.com">jayp46157@gmail.com</a>
          </p>
        </div>
        <div className="footerlinks">
          <div className="linkwrapper">
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
      </div>
      <hr />
      <p className="copyRight">
        <i className="fa-regular fa-copyright"></i> Copy Right made by
        <a href="https://github.com/jayp3030" target="_blank" rel="noreferrer"> JAY</a>
      </p>
    </div>
  );
}
