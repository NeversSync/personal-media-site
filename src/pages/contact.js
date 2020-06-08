import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'


const contact = props => (
  <Layout>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Contact Nicky Evers" />
    </Helmet>
        <Contact/>
  </Layout>
)

export default contact
