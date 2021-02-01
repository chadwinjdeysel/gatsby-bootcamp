import React from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsArticle {
                edges {
                    node {
                        name
                        slug
                        publishedDate
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Head title="Blog" />

            <h1>Latest Blogs</h1>

            <ol className={ blogStyles.posts }>
                {data.allDatoCmsArticle.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={edge.node.slug}>

                                <h2>{edge.node.name}</h2>

                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage
