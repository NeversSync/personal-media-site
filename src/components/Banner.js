import React from 'react'
// import pic01 from '../assets/images/pic01.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header className="dark-bg">
        <h2>Nicky Evers</h2>
        <h3>
        Creative, mover, friend
        </h3>
      </header>
    </div>
    <ScrollLink
      to="one"
      className="goto-next banner-goto"
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
