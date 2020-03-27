import React from "react"
import { Link, graphql } from "gatsby"
import { DiscussionEmbed } from "disqus-react"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const disqusConfig = {
      shortname: process.env.GATSBY_DISQUS_NAME,
      config: { identifier: post.id, title: post.frontmatter.title },
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small>{post.frontmatter.date}</small>
            {" ∙ "}
            <small>{post.fields.readingTime.text}</small>
          </header>
          <section
            style={{ marginTop: "1rem" }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div>
            <div style={{ textAlign: "center", marginBottom: "1rem", color: "lightgrey" }}>
              ‒ ‒ ‒
            </div>
            <div className="footer-card">
              <div className="image">
                <img className="image-src" src="https://raw.githubusercontent.com/fuchodeveloper/blog/master/content/assets/fredrick-mgbeoma.jpg" alt="Fredrick Mgbeoma"/>
              </div>
              <div className="content">
                Hi there! My name is Fred. I create tech content here and on <a href="https://www.youtube.com/channel/UCS6IBh0slJvb2GqpanDUS7w" target="_blank" rel="noopener noreferrer">YouTube</a> to share my journey in software development. I also speak at conferences and contribute to Open Source. You could support my journey by buying me a coffee or becoming my Patreon
                <div>
                  <div className="patreon">
                    <a href="https://www.patreon.com/bePatron?u=32254942" data-patreon-widget-type="become-patron-button" style={{ textDecoration: "none" }} rel="noopener noreferrer">
                      <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="patreon banner" style={{ marginBottom: "0" }} />
                    </a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                  </div>
                  <div className="koofi">
                    <a href='https://ko-fi.com/Q5Q71JF4K' rel="noopener noreferrer">
                      <img src="https://uc740bf4896316dd49db0dad8ca3.previews.dropboxusercontent.com/p/thumb/AAvfC2bqt9oxFARmPOy1GCxHrqKr8C6kO2J2XJQjYNQyREbAxPhs4P7GQfn_sE-2Zz0ijEV1aRXWvteh7PeTN5oC-aJx7L1CJ4XL7LfB6S-7VhkV-anRguRjqL9AJty_TSGu8p9VRyQP4U9xFlVqPncvQyzZBmypu74y47wgui3VCRhO3GSbsgAZGm1jAdVr00tmEt0N_C-QH07ggqxdLXV_DrUz0Eg_JrDl5Lk5DjpVemIy_hfVbHoPlLs2eeIWZL69qSn8NqsZxs889qQYgtYSuh7BVhuJlVIzxrPAiBRXHltjJBppeyon5mhEF95MeCaGer72yeTiJtt-z3Rx8uK3/p.png?fv_content=true&size_mode=5" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <form 
              className="email-wrapper" 
              action="https://tinyletter.com/codeisbae" 
              method="post" 
              target="popupwindow" 
              onSubmit={() => {
                window.open('https://tinyletter.com/codeisbae', 'popupwindow', 'scrollbars=yes,width=800,height=600'); return true
              }}
            >
              <p><label htmlFor="tlemail">Subscribe to email newsletter</label></p>
              <p>
                <input type="text" className="email-input" name="email" id="tlemail" /></p>
                <input type="hidden" value="1" name="embed" />
                <input className="email-subscribe" type="submit" value="Subscribe" /><p>
              </p>
            </form> */}
          </div>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <DiscussionEmbed {...disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
        readingTime {
          text
        }
      }
    }
  }
`
