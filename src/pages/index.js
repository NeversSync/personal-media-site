import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import MainBio from '../components/MainBio'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'
import Contact from '../components/Contact'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Nicky Evers"
          meta={[
            { name: 'description', content: 'Nicky Evers media' },
            { name: 'keywords', content: 'nicky evers, dj nevers, artist, media, neversmedia' },
          ]}
        ></Helmet>
        <Banner />
        <MainBio />
        <Two />
        <Three />
        <Four />
        <Contact />
      </Layout>
    )
  }
}

export default Home
