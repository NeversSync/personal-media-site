import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'

const DjNevers = props => (
  <Layout>
    <Helmet>
      <title>DJ Nevers</title>
      <meta name="description" content="DJ Nevers sets" />
    </Helmet>

    <div id="main" className="wrapper style1 light-bg dj-nevers">
      <div className="container">
        {/* <header className="major">
          <h2>DJ Nevers</h2>
          <p>
          Nicky Evers has been playing music at Flow-Arts and dance events across North America under the name DJ Nevers for the past six years.
          Here you can find his most recent mixes available for listening and download.
          Follow him on facebook and
          soundcloud to stay in touch.
          <br/>
          Contact him if you want him to play at your event.
          </p>
        </header> */}

        <section id="content">
          <a href="#" className="image fit">
            <img src="https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590876440/personal-site/BCC-dj-nevers-large-center-logo-01.jpg" alt="" />
          </a>
          <h2>DJ Nevers</h2>
          <p>I've been playing music at Flow-Arts and dance events across North America under the name DJ Nevers for the past 8 years.</p>
          <p>
            Here you can find his most recent mixes available for listening and download.
            Follow him on facebook and
            soundcloud to stay in touch.
          <br />
          Contact him if you want him to play at your event.
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default DjNevers
