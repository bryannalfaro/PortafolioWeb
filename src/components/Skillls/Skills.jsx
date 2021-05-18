import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/Skills.css'
import JS from './javascript.png'
import HTML from './html.png'
import CSS from './css.png'
import REACT from './react.png'

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <div id="section3" className="containerSkills" style={{ position: 'relative' }}>
      <h1 className="skilltitle">MY SKILLS</h1>
      <div className="t t1" />
      <div className="t t2" />
      <div className="t t3" />
      <div className="t t4" />
      <div className="cards" data-aos="fade-up">
        <div className="cardSkills">
          <div className="tech">
            <img src={JS} alt="js-logo" />
            <h1>JS</h1>
          </div>
          <div className="contenido">

            <p>I have been learning the basics of JS and manipulation of DOM</p>
          </div>
        </div>
        <div className="cardSkills">
          <div className="tech">
            <img src={HTML} alt="js-logo" />
            <h1>HTML</h1>
          </div>
          <div className="contenido">

            <p>I know how to create a web page structure using HTML</p>
          </div>
        </div>
        <div className="cardSkills">
          <div className="tech">
            <img src={CSS} alt="js-logo" />
            <h1>CSS</h1>
          </div>
          <div className="contenido">

            <p>I know the basics of CSS and I am learning more about animations</p>
          </div>
        </div>
        <div className="cardSkills">
          <div className="tech">
            <img src={REACT} alt="js-logo" />
            <h1>REACT</h1>
          </div>
          <div className="contenido">
            <p>I can create a react app from scratch and using good practices</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Skills
