import React from 'react'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const DJNevers = props => (
  <section
    id="two dj-nevers"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876452/personal-site/dj-nevers-acro-campout.jpg)` }}
  >
    <span className="image fit main">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876452/personal-site/dj-nevers-acro-campout.jpg' alt="" />
    </span>
    <Fade right big>
      <div className="content dark-bg">
        <header>
          <h2>DJ Nevers</h2>
          <p>I've been playing music at Flow-Arts and dance events across North America under the name DJ Nevers for the past 8 years.</p>
          <p>
          Click below to learn more and listen to my most recent recorded sets.</p>
        </header>
        <ul className="actions">
          <li>
            <a href="/" className="button">
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

export default DJNevers
