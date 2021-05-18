import React, { useEffect } from 'react'
import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/Description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub, faFacebook, faInstagram, faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import image from './description.JPG'

const DescriptionCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <div id="section1" className="padred" style={{ position: 'relative' }}>
      <div className="t t1" />
      <div className="t t2" />
      <div className="t t3" />
      <div className="t t4" />
      <div className="card" data-aos="zoom-in-right">
        <div className="info">
          <h1>
            Hello my name is
            <br />
            {' '}
            Bryann Alfaro
          </h1>
          <p>
            I am a computer science student in UVG. I am a very active person.
            {' '}
            <br />
            I like programming and
            discover new things in the technology world.
            {' '}
            <br />
            In my free time I like watch series and
            share with my friends.
          </p>

          <h4>If you want to watch my job you can go to my github</h4>
          <a href="https://github.com/bryannalfaro" aria-label="fac" target="_blank" rel="noreferrer" className="git"><FontAwesomeIcon icon={faGithub} className="fa git" /></a>
        </div>
        <div className="description">
          <img src={image} alt="description" className="image" />
          <h2>Contact me:</h2>
          <div className="icons">
            <a href="https://www.facebook.com/bryanneduardo.alfaro" aria-label="fac" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa face" /></a>
            <a href="https://www.instagram.com/bryann_alfaro/" aria-label="fac" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="fa insta" /></a>
            <a href="https://www.linkedin.com/in/bryann-alfaro-509940201/" aria-label="fac" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="fa link" /></a>
          </div>

        </div>
      </div>
      <Link to="section2" spy smooth duration={600}>
        <svg className="arrowsec">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </Link>
    </div>
  )
}

export default DescriptionCard
