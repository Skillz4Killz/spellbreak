import React from "react"
import { graphql } from "gatsby"
import ImgHero from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Classbox from "../components/Class"
import Gauntletbox from "../components/Gauntlet"
import fire from "../constants/gauntlets/fire"
import frost from "../constants/gauntlets/frost"
import lightning from "../constants/gauntlets/lightning"
import stone from "../constants/gauntlets/stone"
import toxic from "../constants/gauntlets/toxic"
import wind from "../constants/gauntlets/wind"
import bulwark from "../constants/classes/bulwark"
import conduit from "../constants/classes/conduit"
import crackshot from "../constants/classes/crackshot"
import frostborn from "../constants/classes/frostborn"
import pyromancer from "../constants/classes/pyromancer"
import scavenger from "../constants/classes/scavenger"
import scholar from "../constants/classes/scholar"
import scout from "../constants/classes/scout"
import stoneshaper from "../constants/classes/stoneshaper"
import tempest from "../constants/classes/tempest"
import toxicologist from "../constants/classes/toxicologist"
import zealot from "../constants/classes/zealot"

const gauntlets = [fire, frost, lightning, stone, toxic, wind]
const classes = [
  bulwark,
  conduit,
  crackshot,
  frostborn,
  pyromancer,
  scavenger,
  scholar,
  scout,
  stoneshaper,
  tempest,
  toxicologist,
  zealot,
]

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroContainer">
        <ImgHero
          imgStyle={{ objectPosition: "center top" }}
          className="Img"
          fluid={props.data.imageOne.childImageSharp.fluid}
        />
        <div className="gradient" />
      </div>
      <div className="HeroGroup">
        <h1>SPELLBREAK WIKI</h1>
        <p>UPDATE 4.3</p>
      </div>
    </div>
    <div className="Selectan">
      <h1>Select a Class</h1>
    </div>
    <div className="CardboxGroupScroll">
      <div className="CardboxGroup">
        {classes.map((kind, index) => (
          <Classbox
            key={index}
            title={kind.name}
            image={require(`./../images/Classes/${kind.image}.jpg`)}
            description={kind.description}
            stats={kind.stats}
          />
        ))}
      </div>
    </div>

    <div className="Selectan">
      <h1>Select a Gauntlet</h1>
    </div>

    <div className="CardboxGroupScroll">
      <div className="CardboxGroup">
        {gauntlets.map((gauntlet, index) => (
          <Gauntletbox
            key={index}
            title={gauntlet.title}
            image={gauntlet.image}
            description={gauntlet.description}
            subdescription={gauntlet.subdescription}
            stats={gauntlet.stats}
            ultimate={gauntlet.ultimate}
            name={gauntlet.name}
            spellname={gauntlet.spellname}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    imageOne: file(relativePath: { eq: "Background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
