import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const MainBio = props => (
  <section
    id="main-bio"
    className="spotlight style1 bottom inactive dark-bg main-bio"
    style={{ backgroundImage: `url(https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591231024/personal-site/nick-west-88439-unsplash.jpg` }}
  >
    {/* <span className="image fit main">
      <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591231024/personal-site/nick-west-88439-unsplash.jpg' alt="" />
    </span> */}
    <Fade >
      <div className="content mainbio">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Hi, I'm Nicky Evers,</h2>
                <p>
                a passionate and multifaceted artist. Here are some of my projects
                </p>
                <span className="image fit">
                  <img src='https://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,h_5080/v1590876742/personal-site/6-8-compressed.jpg' alt="" />
                </span>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                I work as a freelance Web Developer and Designer, check out my professional portfolio and resume at <a href="https://nickyevers.com/" target="_blank">Nicky Evers Design.</a>
              </p>
              <p>
                I have a lifelong romance with music and have been DJ'ing professionally for the last 7 years as DJ Nevers. Listen to my live <a href="">DJ Nevers sets</a> and learn more about my role as a DJ for Noteworthy DJs.
              </p>
              <p>
                I've been travelling to teach and perform movement arts internationally for the past 10 years. I've worked to create a unique style heavily influenced by attempting to integrate my T'ai Chi education into my <a href="/poi">Poi dancing and teaching.</a></p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                I've done work in the past as a professional videographer and photographer and independently produced a documentary <a href="http://www.flowartsafilm.com/" target="_blank">Flow Arts • A Film.</a></p>
                <p>I'm currently based out of Portland, OR in the fern covered Pacific Northwest.</p>
                <p>
                <a href="/contact">Contact me</a> if you want to book me to play music, teach movement arts, perform at your event or need help with a web project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="dj-nevers"
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
