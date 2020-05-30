import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="DJ Nevers"
          meta={[
            { name: 'description', content: 'DJ Nevers' },
            { name: 'keywords', content: 'nicky evers, dj nevers, artist, media, neversmedia' },
          ]}
        ></Helmet>
        <Banner />
        <One />
      </Layout>
    )
  }
}

export default Home
