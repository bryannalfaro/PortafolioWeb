/* eslint-disable react/jsx-boolean-value */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-scroll'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import SwiperCore, {
  EffectCoverflow, Pagination,
} from 'swiper/core'
import '../../styles/Projects.css'
import calculadora from './calculadora.JPG'
import chat from './chat.JPG'
import musicorum from './musicorum.JPG'
import maze from './maze.JPG'

SwiperCore.use([EffectCoverflow, Pagination])

const Projects = () => (
  <div id="section2" className="containerProjects" style={{ position: 'relative' }}>
    <h1 className="titleProject">MY PROJECTS</h1>
    <Swiper
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
      <SwiperSlide>
        <img src={calculadora} />
        <p className="descriptP">CALCULATOR WITH BASIC FUNCTIONS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={chat} />
        <p className="descriptP">CHAT APPLICATION</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={musicorum} />
        <p className="descriptP">STREAM APP FOR DB CLASS</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={maze} />
        <p className="descriptP">MAZE WITH CUSTOMIZE WIDTH AND HEIGHT</p>
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

export default Projects
