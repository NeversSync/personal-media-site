import React from 'react'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Tea = props => (
  <section
    id="tea two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1559350545/steady-hand-tea/IMG_7239.jpg` }}
  >
    <span className="image fit main">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1559350545/steady-hand-tea/IMG_7239.jpg' alt="" />
    </span>
    <Fade right big>
      <div className="content dark-bg">
        <header>
          <h2>Steady Hand Tea</h2>
          <p>Lending a steady hand through tea and tea culture
            Quality tea content
            Education, photography, and events
            Artisan tea sales, retail and wholesale</p>
        </header>
        <ul className="actions">
          <li>
            <a href="https://www.steadyhandtea.com/" target="_blank" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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

export default Tea
