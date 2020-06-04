module.exports = {
  //pathPrefix: `/mygatsby`,
  siteMetadata: {
    title: 'Nicky Evers Media',
    author: 'Nicky Evers',
    description: 'Nicky Evers Personal Site',
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
        short_name: 'Nicky Evers Media',
        start_url: '/',
        // background_color: '#663399',
        background_color: '#eee',
        // theme_color: '#663399',
        theme_color: '#663399',
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
    'gatsby-plugin-offline',
  ],
}
