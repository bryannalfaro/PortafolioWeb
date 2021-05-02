import React from 'react'
import Particles from 'react-particles-js'
import '../../styles/App.css'

const App = () => (
  <div className="padre" style={{ position: 'absolute', width: '100%', height: '100%' }}>
    <div className="App" style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 1000,
              },
            },

          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
          },
          line_linked: {
            enable: false,
          },
          shape: {
            type: 'circle',
          },
        }}
      />
    </div>
    <h1 className="title">WEB DEVELOPER</h1>
    <div className="container">
      <div className="perfil" />
    </div>
  </div>

)

export default App
