/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-scroll'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  EffectCoverflow, Pagination,
} from 'swiper/core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import '../../styles/Projects.css'
import calculadora from './calculadora.JPG'
import chat from './chat.JPG'
import musicorum from './musicorum.JPG'
import maze from './maze.JPG'
import weather from './weather.png'

SwiperCore.use([EffectCoverflow, Pagination])

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <div id="section2" className="containerProjects" style={{ position: 'relative' }}>
      <h1 className="titleProject">MY PROJECTS</h1>
      <div className="t t1" />
      <div className="t t2" />
      <div className="t t3" />
      <div className="t t4" />
      <Swiper
        data-aos="zoom-in-left"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide className="sw1">
          <img src={calculadora} />
          <p className="descriptP">CALCULATOR WITH BASIC FUNCTIONS</p>
          <div className="icon-div">
            <a href="https://calcubeah.netlify.app/" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faEye} className="fa2 git" />
            </a>
            <a href="https://github.com/bryannalfaro/Lab7Calculadora" aria-label="fac" target="_blank" rel="noreferrer" className="git"><FontAwesomeIcon icon={faGithub} className="fa2 git" /></a>

          </div>
        </SwiperSlide>
        <SwiperSlide className="sw1">
          <img src={chat} />
          <p className="descriptP">CHAT APPLICATION</p>
          <div className="icon-div">
            <a href="https://dazzling-poincare-88e237.netlify.app/" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faEye} className="fa2 git" />
            </a>
            <a href="https://github.com/bryannalfaro/ChatWeb" aria-label="fac" target="_blank" rel="noreferrer" className="git"><FontAwesomeIcon icon={faGithub} className="fa2 git" /></a>
          </div>

        </SwiperSlide>
        <SwiperSlide className="sw1">
          <img src={musicorum} />
          <p className="descriptP">STREAM APP FOR DB CLASS</p>
          <div className="icon-div">
            <a href="https://elastic-joliot-157408.netlify.app/" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faEye} className="fa2 git" />
            </a>
            <a href="https://github.com/bryannalfaro/ProyectoBases" aria-label="fac" target="_blank" rel="noreferrer" className="git"><FontAwesomeIcon icon={faGithub} className="fa2 git" /></a>
          </div>

        </SwiperSlide>
        <SwiperSlide className="sw1">
          <img src={maze} />
          <p className="descriptP">MAZE WITH CUSTOMIZE WIDTH AND HEIGHT</p>
          <div className="icon-div">
            <a href="https://keen-bhaskara-311e74.netlify.app/" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faEye} className="fa2 git" />
            </a>
            <a href="https://github.com/bryannalfaro/MazeLab6" aria-label="fac" target="_blank" rel="noreferrer" className="git"><FontAwesomeIcon icon={faGithub} className="fa2 git" /></a>
          </div>

        </SwiperSlide>
        <SwiperSlide className="sw1">
          <img src={weather} />
          <p className="descriptP">WEATHER APP USING API</p>
          <div className="icon-div">
            <a href="https://sad-goldberg-a1f169.netlify.app/" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faEye} className="fa2 git" />
            </a>
            <a href="https://github.com/bryannalfaro/WeatherApp" aria-label="fac" target="_blank" rel="noreferrer" className="git">
              <FontAwesomeIcon icon={faGithub} className="fa2 git" />
            </a>
          </div>

        </SwiperSlide>
      </Swiper>
      <Link to="section3" spy smooth duration={600}>
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0" />
          <path className="a2" d="M0 20 L30 52 L60 20" />
          <path className="a3" d="M0 40 L30 72 L60 40" />
        </svg>
      </Link>

    </div>
  )
}

export default Projects
