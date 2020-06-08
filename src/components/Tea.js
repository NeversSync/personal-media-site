import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Tea = props => (
  <section
    id="tea two"
    className="spotlight style2 right inactive tea"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1559350545/steady-hand-tea/IMG_7239.jpg` }}
  >
    <span className="image fit main">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1559350545/steady-hand-tea/IMG_7239.jpg' alt="" />
    </span>
    <Fade>
      <div className="content dark-bg">
        <header>
          <h2>Artisan Chinese Tea</h2>
          <p>I founded a tea business named <a href="https://www.steadyhandtea.com/" target="_blank" rel="noreferrer">Steady Hand Tea</a> which provides:</p>
          <ul>
            <li>Quality tea content</li>
            <li>Education, photography, and events</li>
            <li>Personally sourced Artisan tea sales</li>
          </ul>
        </header>
        <ul className="actions">
          <li>
            <a href="https://www.steadyhandtea.com/" target="_blank" rel="noreferrer" className="button primary">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="web-design-sum"
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
