import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect( () =>{
    Aos.init({duration:1500});
  },[])
  return (
    <>
      <div className='home' id='home'>
        <div className="innerHome" data-aos='fade-down' data-aos-delay="500">
            <h1>hey I'm jay prajapati</h1>
            <p>MERN stack developer creating web applications that deliver exceptional user experiences. My expertise in MongoDB, Express.js, React, and Node.js allows me to build robust and scalable solutions that meet business needs. </p>
            <a href="https://drive.google.com/file/d/1TYZGtT7_O0t-vge4jUuw20wLxhy2yeNw/view?usp=sharing" target="_blank" rel="noreferrer" ><button className='btn-invert'>resume</button></a>
            <a href="#projects"><button className='btn'>projects</button></a>
        </div>
      </div>
    </>
  )
}
