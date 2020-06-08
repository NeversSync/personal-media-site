import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import MainBio from '../components/MainBio'
import DJNevers from '../components/DjNeversSum'
import PoiSum from '../components/PoiSum'
import Tea from '../components/Tea'
import WebDesignSum from '../components/WebDesignSum'
import Contact from '../components/Contact'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Nicky Evers"
        ></Helmet>
        <Banner />
        <MainBio />
        <DJNevers />
        <PoiSum />
        <Tea />
        <WebDesignSum/>
        <Contact />
      </Layout>
    )
  }
}

export default Home

// TODO:
// Ensure form works - netlify?
// Enlarge arrow on mobile
// Ensure tablet menu layout is ok
// Fix performance issues
  // - replace cloudinary links
  // - add script for youtube embeds
  // - add script for soundcloud embeds

