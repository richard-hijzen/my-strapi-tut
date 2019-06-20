import { Link, graphql, StaticQuery } from "gatsby"
import React from "react"
import "./NavHeader.css"


const NavHeader = () => (
<StaticQuery 
    query={graphql`  
  query NavHeaderQuery {
    allStrapiHeadernav {
        edges{
            node{
                id
                navitem
            }
        }
    }
  }
`}
render={data => ( 
    <ul>
        {data.allStrapiHeadernav.edges.map(document => (
            <li key={document.node.id}> 
                <Link className="haedernavitem" to={`/${document.node.navitem}`}>{document.node.navitem}</Link>
            </li>
        ))}
    </ul>
)}
/>
)

export default NavHeader