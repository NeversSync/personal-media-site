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
          title='Nicky Evers'
          meta={[
            { name: 'keywords', content: 'Nicky Evers poi dj nevers design flow arts a film steady hand tea' },
            { name: 'description', content: 'Nicky Evers. Creative | Developer | Mover' },
            { name: 'og:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590985445/personal-site/foggy-forest-portfolio-landing.jpg' },
            { name: 'og:url', content: 'https://www.nickyevers.com/' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: 'https://www.nickyevers.com/' },
            { name: 'twitter:title', content: 'Nicky Evers' },
            { name: 'twitter:description', content: 'Nicky Evers. Creative | Developer | Mover' },
            { name: 'twitter:image', content: 'https://res.cloudinary.com/nicky-cloudinary/image/upload/v1590985445/personal-site/foggy-forest-portfolio-landing.jpg' }
          ]}
        />
        <div className={props.location == '/' ? 'landing' : ''}>
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
