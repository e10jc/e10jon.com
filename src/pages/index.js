import {graphql} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'
import {Heading} from 'rebass'

import Layout from '../components/layout'

const HomePage = ({data}) => <Layout data={data.bgImage}>
  <Heading>Coming soon</Heading>

  <Helmet>
    <title>e10jon.com</title>
  </Helmet>
</Layout>

export default HomePage

export const query = graphql`
  {
    bgImage: file(relativePath: {eq: "images/bg-couch.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          src
        }
      }
    }
  }
`