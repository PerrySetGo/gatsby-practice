import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import Helmet from 'react-helmet';
import { rhythm } from "../utils/typography"
import backgroundImg from "../pages/background_img.gif"

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

  export default ({ children, data }) =>
    <wrapper>
      <Helmet title={data.site.siteMetadata.title} />
      <Helmet link={[{rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/gridlex/2.4.1/gridlex.min.css'}]} />

      <g.Body
      backgroundImage = {`url(./static/background_img.gif)`}
      backgroundAttachment= {`fixed`}
      backgroundPosition= {`center bottom`}
      backgroundRepeat= {`no-repeat`}
      backgroundSize= {`cover`}
      >
      <g.Div
        margin={`0 auto`}
        maxWidth={1000}
        backgroundColor="#F5F5F5"
        background-color= {`rgba(255, 255, 255, 0.5)`}
        boxShadow= {`inset 5px -5px 122px -35px rgba(117,117,117,1), inset 6px -5px 30px -12px rgba(165,12,25,0.6)`}
        padding-bottom= {`1%`}
        padding={rhythm(2)}
        paddingTop={rhythm(1.5)}
      >


      <div className="grid">
        <div className="col-9">
          <g.H3 margin={`0`} padding={`0`}><Link to={`#`}>{data.site.siteMetadata.title}</Link></g.H3>
        </div>
        <div className="col-3">
          <Link to={`/words/`}>Words</Link> |&nbsp;
          <Link to={`/code/`}>Code</Link> |&nbsp;
          <Link to={`/other/`}>Other</Link>
        </div>
      </div>
      {children()}

    </g.Div>
          </g.Body>

    </wrapper>



// export default ({ children }) =>
//   <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
//     <header style={{ marginBottom: `1.5rem` }}>
//       <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
//         <h3 style={{ display: `inline` }}>MySweetSite</h3>
//       </Link>
//       <ul style={{ listStyle: `none`, float: `right` }}>
//         <ListLink to="/">Home</ListLink>
//         <ListLink to="/about/">About</ListLink>
//         <ListLink to="/contact/">Contact</ListLink>
//       </ul>
//     </header>
//     {children()}
//   </div>


export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
