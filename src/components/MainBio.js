import React from 'react'
import pic02 from '../assets/images/pic02.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const MainBio = props => (
  <section
    id="main-bio"
    className="spotlight style1 bottom inactive dark-bg"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590989514/personal-site/geometric-bg.jpg` }}
  >
    <span className="image fit main">
      <img src={pic02} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Hi, I'm Nicky Evers</h2>
                <p>
                a passionate and multifaceted artist
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                I've been travelling to teach and perform movement arts internationally for the past 10 years. I've worked to create a unique style heavily influenced by attempting to integrate my T'ai Chi education into <a href="/poi">my prop-dancing and teaching.</a>
                <br /><br />
                I work as a freelance Web Developer and Designer, check out my <a href="https://nickyevers.com/" target="_blank">professional portfolio and resume.</a><br />
                <br />I have a lifelong romance with music and have been DJ'ing professionally for the last 6 years as DJ Nevers. Listen to my live <a href="">DJ Nevers sets</a> and learn more about my role as a DJ for Noteworthy DJs.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                I've done work in the past as a professional videographer and photographer and independently produced a documentary <a href="http://www.flowartsafilm.com/" target="_blank">Flow Arts • A Film.</a>
                <br /><br />
                I'm currently based out of Portland, OR in the fern covered Pacific Northwest.<br /><br />
                <a href="/contact">Contact me</a> if you want to book me to play music, teach movement arts, perform at your event or need help with a web project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default MainBio
