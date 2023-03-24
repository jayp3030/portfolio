import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect( () =>{
        Aos.init({duration:1500});
      },[])
  return (
    <div className='about' id='about'>
        <div className="upperAbout">
            <h1 className='title'>About me</h1>
            <span className='underline'></span>
            <p>here you will find more information about me, what i do, what are my skills in programming and latest technology </p>
        </div>
        <div className='bottomAbout' data-aos='fade-up'>
            <div className="leftBottm">
                <h2>get to know me!</h2>
                <p>hello, i'm MERN stack web developer building frontend and backend of websites and web application using mongoDB, express.JS, ract.JS , node.JS. checkout some of my work in <b style={{color : '#333'}}>project</b> section </p>
                <br />
                <p>I'm skilled in writing clean, maintainable code and implementing best practices for security and performance. Whether it's developing new features, improving existing functionality, or troubleshooting issues, I'm dedicated to delivering high-quality work that meets client expectations. Let's work together to bring your vision to life.</p>
                <br />
                <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <b style={{color : '#333'}}>contact</b> me.</p>
            </div>
            <div className="rightBottom">
                <h2>my skills</h2>
                <div className="skills">
                    <div>JAVA</div>
                    <div>DSA basics</div>
                    <div>SQL basics</div>
                    <div>HTML</div>
                    <div>CSS</div>
                    <div>javascript</div>
                    <div>responsive design</div>
                    <div>react</div>
                    <div>node</div>
                    <div>express</div>
                    <div>mongodb</div>
                    <div>git</div>
                    <div>github</div>
                </div>

            </div>
        </div>
      
    </div>
  )
}
