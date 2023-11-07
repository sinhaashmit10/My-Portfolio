import React from 'react'
import './Intro.css';
// import { Link } from 'react-scroll';

const Intro = () => {

  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ashmit</span><br />Front-End Developer</span>
            <p className="introPara">I'm a skilled Front-End Developer with experience in creating visually appealing and user-friendly websites</p>
            {/* <Link><a href='https://www.linkedin.com/in/ashmitsinha'><button className="btn"><img className='btnImg' src="./hireme.png" alt="" />Hire Me</button></a></Link> */}
            <div className="links">
            <a href="https://twitter.com/sinhaashmit25" target="_blank" rel="noopener noreferrer">
              <img src="./twitter.png" alt="Insta" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/ashmitsinha" target="_blank" rel="noopener noreferrer">
              <img src="./linkedin.png" alt="Linkedin" className="link" />
            </a>
            <a href="https://github.com/sinhaashmit10" target="_blank" rel="noopener noreferrer">
              <img src="./github3.png" alt="Github" className="link" />
            </a>
          </div>  
        </div>
        <img src="./image5.png" alt="" className="bg" />
    </section>
  )
}

export default Intro