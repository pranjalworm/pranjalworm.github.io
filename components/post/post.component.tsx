import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Date from '../date/date.component'
import { PostContent, PostMeta } from '../../common/interfaces'
import styles from './post.module.css'
import SuggestedPosts from '../suggested-posts/suggested-posts.component'
import SharePost from '../share-post/share-post.component'


export default function Post({
  postContent,
  suggestedPosts,
}: {
  postContent: PostContent,
  suggestedPosts: PostMeta[]
}) {

  const pageTitle = `${postContent.title} - ${postContent.titleSuffix}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <article className={styles.post}>
        <h1 className={styles.title}>{postContent.title}</h1>
        <div className={styles.date}>
          <Date dateString={postContent.date} />
        </div>
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postContent.contentHtml }} />
      </article>

      {/* TODO: setup and enable this */}
      {/* <SharePost /> */}

      <SuggestedPosts posts={suggestedPosts} />

    </Layout>
  )
}
