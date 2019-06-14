/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { hpe } from 'grommet-theme-hpe';
import { Grommet, Box } from 'grommet';

import Header from "../header"
import Footer from '../Footer';
import "./style.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Grommet theme={hpe}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Box
            margin={{vertical: "0", horizontal: "auto"}}
            width="xlarge"
            >
            <main>{children}</main>
          </Box>
          <Footer />
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
