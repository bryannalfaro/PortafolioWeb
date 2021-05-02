import React from 'react'
import Typed from 'react-typed'
import ParticleC from '../Particle/ParticleCreate'
import '../../styles/App.css'

const App = () => (
  <div className="padre" style={{ position: 'fixed', width: '100%', height: '100%' }}>
    <ParticleC />
    <div className="container">
      <div className="perfil" />
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
    </div>
  </div>

)

export default App
