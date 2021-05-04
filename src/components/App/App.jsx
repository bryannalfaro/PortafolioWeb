import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'
import ParticleC from '../Particle/ParticleCreate'
import Description from '../Description/DescriptionCard'
import Projects from '../Projects/Projects'
import Skills from '../Skillls/Skills'
import '../../styles/App.css'

const App = () => (

  <div className="padre" style={{ position: 'relative', width: '100%', height: '100%' }}>
    <ParticleC />
    <div className="container">
      <h1>
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h1>
      <Typed
        strings={[
          'I am a <strong>web developer</strong>',
          'I am a <strong>visionary</strong>',
          'I am <strong>your best choice</strong>',
        ]}
        typeSpeed={60}
        backSpeed={50}
        loop
        className="typed"
      />

      <Link to="section1" spy smooth duration={600}>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </Link>
    </div>
    <Description />
    <Projects />
    <Skills />
  </div>

)

export default App
