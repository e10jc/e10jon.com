import {graphql} from 'gatsby'
import React from 'react'
import {Helmet} from 'react-helmet'
import {Heading} from 'rebass'

import Layout from '../components/layout'

const HomePage = ({data}) => <Layout data={data.layoutData}>
  <Heading>Coming soon</Heading>

  <Helmet>
    <title>e10jon.com</title>
  </Helmet>
</Layout>

export default HomePage

export const query = graphql`
  query HomePageQuery {
    layoutData: imageSharp(id: {eq: "ca8ed1b1-2b21-5a2e-8628-214a3ab402a3"}) {
      fluid(maxWidth: 2400) {
        src
      }
    }
  }
`