import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const socialTitle = title === 'Home' ? 'Up Your A11y' : title;
        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s: ${data.site.siteMetadata.title}`}
            meta={[
              { name: `description`, content: metaDescription },
              { property: `og:title`, content: socialTitle },
              { property: `og:description`, content: metaDescription },
              { property: `og:image`, content: data.site.siteMetadata.image },
              { property: `og:type`, content: `website` },
              { name: `twitter:card`, content: `summary` },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              { name: `twitter:title`, content: socialTitle },
              { name: `twitter:description`, content: description },
              { name: `twitter:image`, content: data.site.siteMetadata.image },
              {
                name: `monetization`,
                content: '$ilp.uphold.com/GknddD8mjdAR',
              },
            ]
              .concat(
                keywords.length > 0
                  ? { name: `keywords`, content: keywords.join(`, `) }
                  : []
              )
              .concat(meta)}
          >
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,700,900&display=swap"
              rel="stylesheet"
            />
          </Helmet>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`
