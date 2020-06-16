module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Nicky Evers Personal Website',
    author: 'Nicky Evers Design',
    description: 'Nicky Evers Personal Website',
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'DJ Nevers',
        link: '/dj-nevers'
      },
      {
        name: 'Poi Artist',
        link: '/poi'
      }
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nicky Evers Personal Site',
        short_name: 'Nicky Evers Personal Site',
        start_url: '/',
        background_color: '#eee',
        theme_color: '#5818bf',
        display: 'minimal-ui',
        icon: 'src/assets/images/dj-nevers-white-favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-45231102-1',
        head: true
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-recaptcha`,
    }
  ],
}
