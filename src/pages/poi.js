import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Poi = props => (
  <Layout>
    <Helmet>
      <title>Poi Artist</title>
      <meta name="description" content="Nicky Evers Poi Artist" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">
        <section id="content">
          <a className="image fit">
            <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876444/personal-site/Dj_nevers_playing_at_BCC.jpg" alt="" />
          </a>

          <header className="major custom-page-header">
            <div className="header-title">
              <ul className="icons">
                <li>
                  <a href="https://soundcloud.com/djnevers" className="icon brands alt fa-soundcloud" target="_blank">
                    <span className="label">Soundcloud</span>
                  </a>
                </li>
              </ul>
              <h2>Poi Artist</h2>
              <p>
                Nicky Evers is a movement artist specializing in poi spinning.
                His unique approach to movement has gained him a reputation around the world for being an innovative, graceful, and well rounded instructor and performer.
                Here you can find some examples of his performances, inspirational content, and instruction.
                He regularly travels to Flow-arts events around the globe to teach and perform and lives in Portland, OR.
                He also offers high quality private and group workshops. Contact him if you are interested in lessons or performances.</p>
              <ul className="icons">
                  <li>
                    <a href="https://www.facebook.com/djneversmusic/" className="icon brands alt fa-facebook-f" target="_blank">
                      <span className="label">DJ Nevers Facebook</span>
                    </a>
                  </li>
                </ul>

            </div>
              <p>I've been playing music at Flow Arts and dance events across North America under the name DJ Nevers for the past 8 years.</p>
              <p>
                Here you can find my most recent mixes available for listening and download.
                Follow me on Facebook and
              Soundcloud to stay in touch.</p>
              <p>
                {/* <Link to="/contact">Contact me</Link> if you are interested in booking me to play at your event. */}
            </p>
          </header>
            <div className="youtube-container">
              <div className="youtube-video-wrapper">
                <iframe
                  className='youtube-iframe'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/TycWtRxtqWE'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='music video'
                />
              </div>
              <div className="youtube-video-wrapper">
                <iframe
                  className='youtube-iframe'
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/HJmq-poJhD8'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='music video'
                />
              </div>
            </div>
        </section>
      </div>
      </div>
  </Layout>
)

export default Poi
