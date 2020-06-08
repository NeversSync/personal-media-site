import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Thanks = () => (
  <Layout>
    <Helmet>
      <title>Thanks</title>
      <meta name="description" content="Thanks" />
    </Helmet>
    <div className="wrapper style1 light-bg thanks">
    <div className="container">
        <section id="content">
      <h2>Thank you! We will be in touch shortly.</h2>
      <Link to="/" className="button primary">
        Home
    </Link>
    </section>
    </div>
    </div>
  </Layout>
);

export default Thanks;
