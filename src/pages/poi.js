import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Link from 'gatsby-link';
import Fade from 'react-reveal';

const Poi = props => (
  <Layout>
    <Helmet>
      <title>Poi Artist</title>
      <meta name="description" content="Nicky Evers Poi Artist" />
    </Helmet>

    <div id="main" className="wrapper style1 poi">
      <div className="container">
        <section id="content">
          <Fade>
          <header className="major custom-page-header" style={{ marginTop: '0px' }}>
            <a className="image fit">
              <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591224983/personal-site/NICKY-EVERS-PERFORMANCE.jpg" alt="" />
            </a>
            <div className="header-title poi">
              <h2>Poi Artist</h2>
            </div>
            <p>
              I've been travelling to teach and perform movement arts and <a href="https://flowartsinstitute.com/discoveries-poi/" className="link" target="_blank" rel="noreferrer">Poi dance</a> internationally for the past 10 years. I've worked to create a unique style heavily influenced by my time obtaining a BA in T'ai Chi at Naropa University.
                </p>
            <p>
              I regularly teach and perform dancing with Poi and am also available for private and group lessons both in person and online. <Link to="/contact">Contact me</Link> if you are interested.</p>
            <p>
              Below is a selection of past performances and videos.<br/>
                You can see more on my <a href="https://www.facebook.com/neverspoi/" className="link" target="_blank" rel="noreferrer">Facebook</a>, <a href="https://www.instagram.com/neverspinpoi/" className="link" target="_blank" rel="noreferrer">Instagram</a>, and <a href="https://www.youtube.com/user/dharmamystic/" className="link" target="_blank" rel="noreferrer">Youtube accounts</a>.
                </p>
                <div className="icons-wrapper">
              <ul className="icons">
                <li>
                  <a href="https://www.facebook.com/neverspoi/" className="icon brands alt fa-facebook-f" target="_blank" rel="noreferrer">
                    <span className="label">DJ Nevers Facebook</span>
                  </a>
                </li>
                </ul>
                <ul className="icons">
                <li>
                  <a href="https://www.facebook.com/neverspoi/" className="icon brands alt fa-instagram" target="_blank" rel="noreferrer">
                    <span className="label">DJ Nevers Instagram</span>
                  </a>
                </li>
                </ul>
                <ul className="icons">
                <li>
                  <a href="https://www.youtube.com/user/dharmamystic" className="icon brands alt fa-youtube" target="_blank" rel="noreferrer">
                    <span className="label">Soundcloud</span>
                  </a>
                </li>
              </ul>
              </div>
          </header>
          </Fade>
          <div className="youtube-container">
          <Fade bottom cascade>
            <div className="youtube-video-wrapper no-margin-bottom">
              <iframe
                className='youtube-iframe'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/HzbOtdLQ-Xc'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='music video'
              />
            </div>
            <div className="youtube-video-wrapper no-margin-bottom">
              <iframe
                className='youtube-iframe'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/gi1fe3CPTP8'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='music video'
              />
            </div>
            <div className="youtube-video-wrapper no-margin-bottom">
              <iframe
                className='youtube-iframe'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/NBlmZcTH6pU'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='music video'
              />
            </div>
            <div className="youtube-video-wrapper no-margin-bottom">
              <iframe
                className='youtube-iframe'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/V8mS2IVEiRM'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='music video'
              />
            </div>
            </Fade>
          </div>
          <div className="testimonials custom-page-section">
          <h3>Testimonials</h3>
          <p>"Nicky's teaching style is fantastic. He makes a personal connection with each individual and also connects the class with each other to create a unique learning experience."</p>
          <p>"Nicky helped me open and unlock greater flow and connection in poi. He is easy going yet focused. Not only is he a master with poi dancing he is also an excellent teacher making the art feel accessible and fun. There is a quality of joy and presence in his teaching style that make learning easy."
          </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Poi
