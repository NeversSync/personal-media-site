import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import djNeversJSON from '../assets/content/dj-nevers.json'
import { Link } from 'gatsby'
import Fade from 'react-reveal';

const DjNevers = props => (
  <Layout>
    <Helmet>
      <title>DJ Nevers</title>
      <meta name="description" content="DJ Nevers sets" />
    </Helmet>

    <div id="main" className="wrapper style1 light-bg dj-nevers">
      <div className="container">
        <section id="content">
          <a className="image fit">
            <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876444/personal-site/Dj_nevers_playing_at_BCC.jpg" alt="" />
          </a>
          <Fade >
          <header className="major custom-page-header">
            <div className="header-title">
              <ul className="icons">
                <li>
                  <a href="https://soundcloud.com/djnevers" className="icon brands alt fa-soundcloud" target="_blank" rel="noreferrer">
                    <span className="label">Soundcloud</span>
                  </a>
                </li>
              </ul>
              <h2>DJ Nevers</h2>
              <ul className="icons">
                <li>
                  <a href="https://www.facebook.com/djneversmusic/" className="icon brands alt fa-facebook-f" target="_blank" rel="noreferrer">
                    <span className="label">DJ Nevers Facebook</span>
                  </a>
                </li>
              </ul>

            </div>
            <p>I've been playing music at Flow Arts and dance events across North America under the name DJ Nevers for the past 8 years.</p>
            <p>
              Here you can find my most recent mixes available for listening and download.
              Follow me on <a href="https://www.facebook.com/djneversmusic/" className="link" target="_blank" rel="noreferrer">Facebook</a> and <a href="https://soundcloud.com/djnevers" className="link" target="_blank" rel="noreferrer">Soundcloud</a> to stay in touch.</p>
            <p>
              <Link to="/contact">Contact me</Link> if you are interested in booking me to play at your event.
            </p>
          </header>
          </Fade>
            <div className="youtube-container">
          <Fade bottom cascade>
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
          </Fade>
            </div>
          <div className="soundcloud-wrapper">
            <Fade bottom cascade>
              {
                djNeversJSON.content.map((data, index) => {
                  return <div className="soundcloud-player" key={`set_num_${index}`}><iframe width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="no"
                    title="soundcloud mix"
                    src={`${data.set}`} />
                  </div>
                })
              }
            </Fade>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default DjNevers
