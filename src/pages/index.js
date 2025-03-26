import * as React from "react";
import Banner from "../components/banner";
import Layout from "../components/layout";

const pageStyles = {
  backgroundColor: "black",
  color: "whitesmoke",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const info = {
  text: "Listado de peliculas",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const IndexPage = () => {
  //a partir del return jsx
  return (
    <Layout>
      <main style={pageStyles}>
        <h1>{info.text}</h1>
        <Banner texto="Amor" url="https://gogle.com"></Banner>
        <Banner texto="Libertad" url="https://mozilla.com"></Banner>
        <Banner></Banner>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
