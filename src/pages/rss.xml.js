import rss from '@astrojs/rss'
import sanitizeHtml from 'sanitize-html'

export function get (context) {
  const postImportResult = import.meta.glob('../content/blog/*.md', {
    eager: true
  })
  const posts = Object.values(postImportResult)

  return rss({
    title: 'Mardroide’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site,
    items: posts.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter
    }))
  })
}
