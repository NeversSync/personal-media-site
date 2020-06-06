import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade';

const WebDesignSum = props => (
  <section
    id="web-sum three"
    className="spotlight style3 left inactive web-design-sum"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591230111/personal-site/wireframe.jpg)` }}
  >
    <span className="image fit main bottom">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591230111/personal-site/wireframe.jpg' alt="" />
    </span>
    <Fade >
      <div className="content dark-bg">
        <header>
          <h2>Web Development & Design</h2>
          <p>I work as a freelance Web Developer and Designer making websites for businesses and artists. Learn more about my business and see examples of my work on my <a href="http://nickyevers.com/" target="_blank">Nicky Evers Design</a> website.</p>
        </header>
        <ul className="actions">
          <li>
            <a href="https://nickyevers.com/" target="_blank" className="button primary">Learn More</a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="contact"
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

export default WebDesignSum
