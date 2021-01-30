import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            id
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                raw
                references {
                    contentful_id
                    title
                    file {
                        url
                    }
                }
            }
        }
    }
`

const Blog = (props) => {
    const jsonData = JSON.parse(props.data.contentfulBlogPost.body.raw);

    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const imageId = node.data.target.sys.id;
                const{
                    file: {url},
                    title,
                } = props.data.contentfulBlogPost.body.references.find(({ contentful_id: id}) => {
                    return id === imageId;
                });

                return <img src={url} alt={title} />
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>

            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>

            {documentToReactComponents(jsonData, options)}
        </Layout>
    )
}

export default Blog