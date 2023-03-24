import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>
        <div className="upperAbout">
            <h1 className='title'>contact me</h1>
            <span className='underline'></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maxime, quo animi laborum aperiam corrupti non unde iste quam reprehenderit?</p>
        </div>
        <div className="bottomAbout bottomContact">
            <form action="">
                <p>name</p>
                <input type="text" placeholder='Enter Name'/>
                <p>email</p>
                <input type="mail" placeholder='Enter Email' />
                <p>message</p>
                <textarea name="" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
                <button className='btn submit'>SUBMIT</button>
            </form>
        </div>
      
    </div>
  )
}
