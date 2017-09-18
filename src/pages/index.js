import React from "react"
import Link from "gatsby-link"
import g from "glamorous"
import { rhythm } from "../utils/typography"

export default ({ data }) =>
<wrapper>

<div>
  <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
    Amazing Pandas Eating Things
  </g.H1>
  <h4>
    {data.allMarkdownRemark.totalCount} Posts
  </h4>
  {data.allMarkdownRemark.edges.map(({ node }) =>
    <div>

    <Link
  to={node.fields.slug}
  css={{ textDecoration: `none`, color: `inherit` }}
>

      <g.H3 marginBottom={rhythm(1 / 4)}>
        {node.frontmatter.title}{" "}
        <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
        {node.frontmatter.html}
      </g.H3>
      <p>
        {node.excerpt}
      </p>
    </Link>
    </div>
  )}
</div>

<div>
   <h1>About {data.site.siteMetadata.title}</h1>
   <div>
     <img src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg" />
   </div>
 </div>


<div>
    <h1>Hi! Im building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
   <h1>Richard Hamming on Luck</h1>
   <div style={{margin: '3rem auto', maxWidth:600 }}>
     <p>
       From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
         You and Your Research
       </a>”.
     </p>
     <blockquote>
       <p>
         There is indeed an element of luck, and no, there isn’t. The prepared
         mind sooner or later finds something important and does it. So yes, it
         is luck.{" "}
         <em>
           The particular thing you do is luck, but that you do something is
           not.
         </em>
       </p>
     </blockquote>
   </div>
   <p>Posted April 09, 2011</p>


 <div style={{ color: `tomato` }}>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="http://lorempixel.com/400/200/" />
    <br />
    <Link to="/page-2/">Link</Link><br />
    <Link to="/counter/">Counter</Link>
  </div>
 </wrapper>

//this is a nested qy=uery!
 export const query = graphql`

   query IndexQuery {
     site {
       siteMetadata {
         title
       }
     },
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
 `
