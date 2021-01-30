import React from 'react'
import { Link } from 'gatsby' 

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>

      <Head title="Home"/>

      <h1>Hello Wrld</h1>

      <h2>
        I'm Chadwin, a full stack developer living in the dry Vaal Triangle
      </h2>

      <p>
        need a developer? 
        
        <Link to="/contact">let's get in touch</Link>
      </p>
    </Layout>
  )
}

export default IndexPage