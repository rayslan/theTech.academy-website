import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

// components
import Header from "./header"


const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
      text-decoration: none;
      // cursor: none;
    }

  html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

  body {
        font-size: 16px;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background};
        overscroll-behavior: none;
        overflow-x: hidden;
    }

`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const darkTheme = {
      background: '#645394',
      text: '#e2eaeb',
      peach: "#f0ede3"
    }
    const lightTheme = {
      background: '#e2eaeb',
      text: '#645394'
    }

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle/>
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  ) 
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout