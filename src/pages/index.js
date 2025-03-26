import * as React from "react"
import Banner from "../components/banner"

const pageStyles = {
  backgroundColor: "black",
  color: "whitesmoke",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const info = {
  text: "Listado de peliculas",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}


const IndexPage = () => {
  //a partir del return jsx
  return (
    <main style={pageStyles}>
      <h1>{info.text}</h1>
      <Banner></Banner>
      
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
