import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Date from '../../components/date/date'
import utilStyles from '../../common/utils.module.css'
import { PostContent, PostMeta } from '../../common/interfaces'
// import SuggestedPosts from '../suggested-posts/suggested-posts.component'
// import { PostType } from '../../services/posts.service'


export default function Post({
  postContent,
  suggestedPosts,
  postType
}: {
  postContent: PostContent,
  suggestedPosts: PostMeta[],
  postType: any
}) {

  const pageTitle = `${postContent.title} - ${postContent.titleSuffix}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postContent.title}</h1>
        <div className={utilStyles.note}>
          <Date dateString={postContent.date} />
        </div>
        <div className={utilStyles.content} dangerouslySetInnerHTML={{ __html: postContent.contentHtml }} />
      </article>

      {/* <SuggestedPosts posts={suggestedPosts} postType={postType} /> */}

    </Layout>
  )
}
