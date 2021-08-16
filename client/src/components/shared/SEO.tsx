import React from 'react';

// Libraries
import Helmet from 'react-helmet';

// Assets
import siteMetadata from '../../assets/placeholder/siteMetadata';

interface SEOprops {
  title?: string;
  description?: string;
  img?: string;
}

const SEO: React.FC<SEOprops> = ({title, description, img}) => {
  const {
    location: {pathname},
  } = window;

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: img || `${siteMetadata.canonicalUrl}${siteMetadata.image}`,
    url: `${siteMetadata.canonicalUrl}${pathname}`,
    social: siteMetadata.social,
  };

  return (
    <Helmet>
      {/* General tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.social.twitter} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
