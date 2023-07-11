import algoliasearch from 'algoliasearch'
import parser from 'xml2json'
import fs from 'node:fs'
import path from 'node:path'
import dotenv from 'dotenv'
dotenv.config()

const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_SEARCH_ONLY_KEY
)

const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME)

const rss = fs.readFileSync(path.resolve('../dist/rss.xml'), 'utf-8')
const json = parser.toJson(rss, { object: true })

const posts = json.map((post) => ({
  ...post,
  objectId: post.guid
}))

index
  .saveObjects(posts)
  .then((objectIds) => {
    console.log({ objectIds })
  })
  .catch((err) => {
    console.error(err)
  })
