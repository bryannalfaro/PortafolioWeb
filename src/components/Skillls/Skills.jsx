import React from 'react'
import '../../styles/Skills.css'
import JS from './javascript.png'
import HTML from './html.png'
import CSS from './css.png'
import REACT from './react.png'

const Skills = () => (
  <div id="section3" className="containerSkills" style={{ position: 'relative' }}>
    <h1 className="skilltitle">MY SKILLS</h1>
    <div className="cards">
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

export default Skills
