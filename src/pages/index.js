import React from "react"
import Link from "gatsby-link"

export default () =>
<wrapper>
<div>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
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
