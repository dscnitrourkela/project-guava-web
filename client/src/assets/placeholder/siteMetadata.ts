const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'Signit', // Navigation and Site Title
  siteTitleAlt: 'Signit: Digital Certificate Generation', // Alternative Site title for SEO
  siteTitleShort: 'Signit', // short_name for manifest
  siteUrl: 'https://signit.dscnitrourkela.org', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Manage all your certificates at one place. Upload certificate template and associated data. Request signatures from authorities and set dates fro automatic distribution. Manage queries and complaints.',
  author: 'DSC NIT Rourkela', // Author for schemaORGJSONLD
  organization: 'DSC NIT Rourkela',

  userTwitter: '@dscnitrourkela', // Twitter Username
  ogSiteName: 'Signit', // Facebook Site Name
  ogLanguage: 'en_UK',
  googleAnalyticsID: 'G-RBF81TQFH0',

  // Manifest and Progress color
  themeColor: '#3a90fe',
  backgroundColor: '#ffffff',

  // Social component
  twitter: 'https://twitter.com/dscnitrourkela/',
  github: 'https://github.com/dscnitrourkela/project-guava-web',
  linkedin: 'https://www.linkedin.com/company/dscnitrourkela',
  facebook: 'https://facebook.com/dscnitrourkela',
  instagram: 'https://instagram.com/dscnitrourkela',
};

export default {
  siteUrl: config.siteUrl + config.pathPrefix,
  title: config.siteTitle,
  twitterHandle: config.userTwitter,
  description: config.siteDescription,
  keywords: [
    'Signit',
    'digital certificate',
    'authenticity',
    'opensource',
    'react',
    'typescript',
    'graphql',
    'apollo',
  ],
  canonicalUrl: config.siteUrl,
  image: config.siteLogo,
  author: {
    name: config.author,
    minibio: config.siteDescription,
  },
  organization: {
    name: config.organization,
    url: config.siteUrl,
    logo: config.siteLogo,
  },
  social: {
    twitter: config.userTwitter,
  },
};
