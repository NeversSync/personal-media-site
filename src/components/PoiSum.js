import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link';

const PoiSum = props => (
  <section
    id="poi-sum three"
    className="spotlight style3 left inactive poi-sum"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591224983/personal-site/NICKY-EVERS-PERFORMANCE.jpg)` }}
  >
    <span className="image fit main bottom">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591224983/personal-site/NICKY-EVERS-PERFORMANCE.jpg' alt="" />
    </span>
    <Fade>
      <div className="content dark-bg">
        <header>
          <h2>Poi Artist</h2>
          <p>I've had a life long love of movement arts and have focused the most on an art form named poi spinning. I have travelled internationally teaching and performing with poi and am passionate about sharing poi and other <a href="http://flowartsafilm.com/" target="_blank">Flow Arts</a> with the world</p>
        </header>
        <ul className="actions">
          <li>
            <Link to="/poi" className="button primary">
              Learn More
            </Link>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="tea"
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

export default PoiSum
