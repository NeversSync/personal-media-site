import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic07 from '../assets/images/pic07.jpg'

const Poi = props => (
  <Layout>
    <Helmet>
      <title>Poi Artist</title>
      <meta name="description" content="Nicky Evers Poi Artist" />
    </Helmet>

    <div id="main" className="wrapper style1">
      <div className="container">

        <section id="content">
          <a href="#" className="image fit">
            <img src={pic07} alt="" />
          </a>
          <h2>Poi Artist</h2>
          <p>
          Nicky Evers is a movement artist specializing in poi spinning.
His unique approach to movement has gained him a reputation around the world for being an innovative, graceful, and well rounded instructor and performer.
Here you can find some examples of his performances, inspirational content, and instruction.
He regularly travels to Flow-arts events around the globe to teach and perform and lives in Portland, OR.
He also offers high quality private and group workshops. Contact him if you are interested in lessons or performances.
          </p>
        </section>
      </div>
    </div>
  </Layout>
)

export default Poi
