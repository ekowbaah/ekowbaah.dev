import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { Disqus } from "gatsby-plugin-disqus"

const ComponentName = ({ data }) => {
  const { content, title, desc,id } = data.blog

  let disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : '',
    identifier: id,
    title: title,
  }

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <div className="underline"/>
          <Disqus config={disqusConfig} />
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      id
    }
  }
`

export default ComponentName
