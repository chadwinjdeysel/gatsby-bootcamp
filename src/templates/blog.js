import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query ($slug: String!){
        datoCmsArticle (slug: { eq: $slug}){
            name
            publishedDate
            slug
            bodyNode {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

const Blog = (props) => {

    return (
        <Layout>
            <Head title={props.data.datoCmsArticle.name}/>

            <h1>{props.data.datoCmsArticle.name}</h1>
            <p>{props.data.datoCmsArticle.publishedDate}</p>

            <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsArticle.bodyNode.childMarkdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog