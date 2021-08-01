import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image"
import React from 'react';

const ImageMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} />
}

export default ImageMe
