import {
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faShieldAlt,
  faDraftingCompass,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

export default Object.freeze({
  FEATURES: [
    {
      TITLE: 'Authenticity',
      DESCRIPTION:
        'Initiate a request to authorize a list of certificates by an institute administrator for your event virtually. Maintain the authencity of your certificates through custom ids.',
      ID: 'feature1',
      ICON: faShieldAlt,
    },
    {
      TITLE: 'Custom Designs',
      DESCRIPTION:
        'Add your own custom certificate templates, have the freedom to place signature freely on the canvas, adjust certificate id locations, select signature colors, easily add participants and many more.',
      ID: 'feature2',
      ICON: faDraftingCompass,
    },
    {
      TITLE: 'Easy Management',
      DESCRIPTION:
        'Manage all your initialized and approved certificates through our dashboards. Filter through your old requests easily and view details regarding your requests, status and others.',
      ID: 'feature3',
      ICON: faTasks,
    },
  ],
  SOCIALS: [
    {
      NAME: 'Github',
      ICON: faGithub,
      LINK: 'https://github.com/dscnitrourkela/project-guava-web',
    },
    {
      NAME: 'Instagram',
      ICON: faInstagram,
      LINK: 'https://www.instagram.com/dscnitrourkela/',
    },
    {
      NAME: 'Twitter',
      ICON: faTwitter,
      LINK: 'https://twitter.com/dscnitrourkela',
    },
  ],
  NAV: {
    LANDING: 'homepage-landing',
    FEATURES: 'homepage-features',
    ABOUT: 'homepage-about',
  },
});
