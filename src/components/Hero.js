import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: {eq: "hero-img.png"}) {
      childImageSharp {
        fluid {
        ...GatsbyImageSharpFluid
          src
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp:{fluid}
        }
  }= useStaticQuery(query)

  return <header className="hero">
    <div className="section-center hero-center">
    <article className="hero-info">
      <div>
        <div className="underline">
        </div>
        <h1>Ekow Baah-Nyarkoh</h1>
        <Link to="/contact" className="btn">
          Contact Me
        </Link>
        <SocialLinks></SocialLinks>
      </div>
    </article>
    <Image fluid={fluid} className="hero-img"></Image>
    </div>
  </header>
}

export default Hero
