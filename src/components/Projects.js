import React, { useEffect } from "react";
import mkup1 from "../imgs/sitech.jpg"
import mkup2 from "../imgs/bestapp.jpg"
import mkup3 from "../imgs/university.jpg"
import mkup4 from "../imgs/nasa.jpg"
import mkup5 from "../imgs/newsapp.jpg"
import mkup6 from "../imgs/makemyhome.jpg"
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  useEffect( () =>{
    Aos.init({duration:1750});
  },[])
  return (
    <div className="projects" id="projects">
      <div className="upperAbout">
        <h1 className="title">Projects</h1>
        <span className="underline"></span>
        <p>
          here you will find some of my project that i created with each project you can find summary of project and technologies used in it.
        </p>
      </div>
      <div className="bottomProjects">
      <div className="row" data-aos='fade-up'>
          <div className="col1">
            <div className="imgWrapper">
                <img src={mkup1} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>siTechs</h2>
            <p>
              sitechs is my first frontend website this website is about CAD, CAM, NX-modeling services which i made on the request of one my friend. 
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>HTML</div>
              <div>CSS </div>
              <div>javascript</div>
            </div>
            <div className="links">
            <a href="https://si-techs.netlify.app/" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">live</button></a>
            <a href="https://github.com/jayp3030/sitechs" target="_blank" rel="noreferrer"><button className="btn">code</button></a>
            </div>
          </div>
        </div>
        <div className="row" data-aos='fade-up'data-aos-delay="100">
          <div className="col1">
          <div className="imgWrapper">
                <img src={mkup2} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>bestApp</h2>
            <p>
              bestApp is simple frontend website which i have made as a part of my personal project, this website is about one application which provides different services, it also contains pricing of app and features of app.
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>HTML</div>
              <div>CSS</div>
            </div>
            <div className="links">
            <a href="https://bestapp-io.netlify.app/" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">live</button></a>
            <a href="https://github.com/jayp3030/BestApp_frontend" target="_blank" rel="noreferrer"><button className="btn">code</button></a>
            </div>
          </div>
        </div>
        <div className="row" data-aos='fade-up'data-aos-delay="100">
          <div className="col1">
          <div className="imgWrapper">
                <img src={mkup3} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>university website</h2>
            <p>
              university website is developed by me as a part of my personal project, this website contains frontend only. this website is for university which containes facilities provided by university, courses offers by university, campus information and many more.
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>HTML</div>
              <div>CSS</div>
              <div>javascript</div>
            </div>
            <div className="links">
            <a href="https://best-university.netlify.app/" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">live</button></a>
            <a href="https://github.com/jayp3030/university_frontend" target="_blank" rel="noreferrer"><button className="btn">code</button></a>
            </div>
          </div>
        </div>
        <div className="row" data-aos='fade-up'data-aos-delay="100">
          <div className="col1">
          <div className="imgWrapper">
                <img src={mkup4} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>NASA controll-mission</h2>
            <p>
              NASA controll mission is a backend project which i have done during one course.this website was made of using node, express, mongoDB in backend and react in frontend.which describes how API's are built and how request are served in frontend.
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>react</div>
              <div>node</div>
              <div>express</div>
              <div>mongoDB</div>
            </div>
            <div className="links">
            <a href="https://github.com/jayp3030/Nasa-Control-Mission-Project" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">code</button></a>
            </div>
          </div>
        </div>
        <div className="row" data-aos='fade-up' data-aos-delay="100">
          <div className="col1">
          <div className="imgWrapper">
                <img src={mkup5} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>newsApp</h2>
            <p>
              NEWS app is react website which provides functionallity to watch daily exiting news from all over world, i had used NEWS api to implement this website which is free to use. 
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>react</div>
              <div>news api</div>
            </div>
            <div className="links">
            <a href="https://github.com/jayp3030/NewsApp" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">code</button></a>
            </div>
          </div>
        </div>
        {/* <div className="row" data-aos='fade-up' data-aos-delay="100">
          <div className="col1">
          <div className="imgWrapper">
                <img src={mkup6} alt="/" />
            </div>
          </div>
          <div className="col2">
            <h2>makemyHome</h2>
            <p>
              makemyHome is MERN website it is part of our design engineering project, this website is very useful for students and employees who migrates for study and thier job.using this website you can find tiffin services and housing services near your workplace and collage.
            </p>
            <h2>tech used</h2>
            <div className="techs skills">
              <div>react</div>
              <div>node</div>
              <div>mongoDB</div>
            </div>
            <div className="links">
              <a href="https://github.com/jayp3030/makeMyHome" target="_blank" rel="noreferrer"><button className="btn-invert live-inverted">code</button></a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
