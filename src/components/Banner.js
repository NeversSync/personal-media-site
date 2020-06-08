import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal';

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header className="dark-bg">
      <Fade top>
        <h2>Nicky Evers</h2>
      </Fade>
      <Fade bottom>
        {/* <h3>Creative | Developer |  Mover</h3> */}
        <h3>Music | Movement | Design | Development | Tea</h3>
      </Fade>
      </header>
    </div>
    <ScrollLink
      to="main-bio"
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
