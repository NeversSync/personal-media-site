import React from 'react'
// import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header className="dark-bg">
        <h2>Nicky Evers</h2>
        <p>
          Creative, mover, friend
        </p>
      </header>
      {/* <span className="image">
        <img src={'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876452/personal-site/dj-nevers-acro-campout.jpg'} alt="intro" />
      </span> */}
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
