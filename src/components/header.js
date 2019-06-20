import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'
import NavHeader from '../components/NavHeader'

const Header = ({ siteTitle }) => (
  <StaticQuery 
    query={graphql`  
  query HeaderQuery {
    strapiHeaderhome {
          id
          title
          headerimage {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }
  }
`}
  render={data => (
    <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0rem 1.0875rem`,
      }}
    >
    <div class="headerNav">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {data.strapiHeaderhome.title}
        </Link>
      </h1>
      <NavHeader />
      </div>

      <Img fluid={data.strapiHeaderhome.headerimage.childImageSharp.fluid}/>
    </div>
    
  </header>
  )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header




