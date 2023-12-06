import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import '../assets/scss/main.scss'
import '../assets/scss/custom.scss'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet
          title='Nico Evers'
          meta={[
            { name: 'keywords', content: 'Nico Evers poi dj nevers design flow arts a film steady hand tea' },
            { name: 'description', content: 'Nico Evers. Music | Movement | Design | Development | Tea' },
            { name: 'og:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591673223/personal-site/personal-site-screenshot.jpg' },
            { name: 'og:url', content: 'https://www.nicoevers.com/' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://www.nicoevers.com/' },
            { name: 'twitter:title', content: 'Nico Evers' },
            { name: 'twitter:description', content: 'Nico Evers. Music | Movement | Design | Development | Tea' },
            { name: 'twitter:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1591673223/personal-site/personal-site-screenshot.jpg' }
          ]}
        />
        <div className={props.location === '/' ? 'landing' : ''}>
          <div id="page-wrapper">
            <Header
              menuLinks={data.site.siteMetadata.menuLinks}
              siteTitle={data.site.siteMetadata.title}
            />
            {children}
            <Footer />
          </div>
        </div>
      </React.Fragment>
    )}
  />
)

export default Layout
