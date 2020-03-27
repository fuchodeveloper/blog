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
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ textAlign: "center", marginBottom: "1rem", color: "lightgrey" }}>
              ‒ ‒ ‒
            </div>
            <div className="footer-card">
              <div className="image">
                <img className="image-src" src="https://raw.githubusercontent.com/fuchodeveloper/blog/master/content/assets/fredrick-mgbeoma.jpg" alt="Fredrick Mgbeoma"/>
              </div>
              <div className="content">
                Hi there! My name is Fred. I create tech content here and on <a href="https://www.youtube.com/channel/UCS6IBh0slJvb2GqpanDUS7w" target="_blank" rel="noopener noreferrer">YouTube</a> to share my journey in software development. You could support my journey by buying me a coffee or becoming my Patreon
                <div className="content-body">
                  <div className="patreon image-wrapper">
                    <a href="https://www.patreon.com/bePatron?u=32254942" data-patreon-widget-type="become-patron-button" rel="noopener noreferrer">
                      <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" alt="patreon banner" style={{ marginBottom: "0" }} />
                    </a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                  </div>
                  <div className="koofi image-wrapper">
                    <a href='https://ko-fi.com/Q5Q71JF4K' target="_blank" rel="noopener noreferrer">
                      <img src="https://raw.githubusercontent.com/fuchodeveloper/blog/master/content/assets/BuyMeACoffee.png" alt="ko-fi banner" />
                    </a>
                  </div>
                </div>
                <div>
                  <form
                    action="https://tinyletter.com/codeisbae"
                    method="post"
                    target="popupwindow"
                    onSubmit={() => {
                      window.open('https://tinyletter.com/codeisbae', 'popupwindow', 'scrollbars=yes,width=800,height=600'); return true
                    }}
                  >
                    <span>
                      <input type="text" className="email-input" name="email" id="tlemail" placeholder="Get email updates" />
                    </span>
                    <input type="hidden" value="1" name="embed" />
                    <input className="email-subscribe" type="submit" value="Subscribe" /><p>
                    </p>
                  </form>
                </div>
              </div>
            </div>
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
