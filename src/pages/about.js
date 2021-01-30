import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>

            <h1>About Us</h1>

            <p>My name is legion. For we are maaaaaney</p>

            <p>Wanna deveoper? <Link to="/contact">let's get in touch </Link></p>
        </Layout>
    )
}

export default AboutPage