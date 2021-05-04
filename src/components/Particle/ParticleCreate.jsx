import React from 'react'
import Particles from 'react-particles-js'
import '../../styles/Particle.css'

const ParticleC = () => (
  <div className="app">
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
          detect_on: 'window',
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
)

export default ParticleC
