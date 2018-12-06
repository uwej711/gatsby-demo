import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Toggle from '../components/toggle'

const IndexPage = ({data}) => (
  <Layout>
    <h1>Hi everybody</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <p>&nbsp;</p>
    <Toggle heading={"ÜS"} text={"Text"} />

    {data.blog.edges.map((edge, index) => (
      <div key={index}>
        <h3>{edge.node.title}</h3>
        <div dangerouslySetInnerHTML={{__html:edge.node.excerpt }}></div>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
    query {
        blog: allWordpressPost(limit: 3, sort: {order: DESC, fields: [date]}) {
            edges {
                node {
                    id
                    title
                    excerpt
                }
            }
        }
    }
`
