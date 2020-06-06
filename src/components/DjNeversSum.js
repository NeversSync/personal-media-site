import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Link from 'gatsby-link';

const DJNevers = props => (
  <section
    id="two dj-nevers"
    className="spotlight style2 right inactive dj-nevers"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591230468/personal-site/dj-nevers-landing-overlay.jpg)` }}
  >
    <span className="image fit main">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591230468/personal-site/dj-nevers-landing-overlay.jpg' alt="" />
    </span>
    <Fade>
      <div className="content dark-bg">
        <header>
          <h2>Music</h2>
          <p>I've been playing music at Flow Arts and dance events across North America under the name DJ Nevers for the past 8 years.</p>
          <p>
          Click below to learn more and listen to my most recent recorded sets.</p>

        </header>
        <ul className="actions">
          <li>
            <Link to="/dj-nevers" className="button primary">
              Learn More
            </Link>
          </li>
        </ul>
        <div className="soundcloud-player">
            <iframe width="100%"
                  height="100%"
                  scrolling="no"
                  frameBorder="no"
                  title="soundcloud mix"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/455835213&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
          </div>
      </div>
    </Fade>
    <ScrollLink
      to="poi-sum"
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
