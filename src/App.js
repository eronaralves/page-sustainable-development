import React from "react"
import {createGlobalStyle} from "styled-components"
import {
  BrowserRouter as Router,
} from "react-router-dom"

import Routes from "./routes"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
    font-family: "Roboto";

  }
`


export default function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Routes/>
    </Router>
  )
}
