import Layout from '../Layout/Layout'
import Head from 'next/head'
import Date from '../Date/Date.component'
import { PostContent, PostMeta } from '../../common/interfaces'
import styles from './post.module.css'
import SuggestedPosts from '../SuggestedPosts/SuggestedPosts'

export default function Post({
  postContent,
  suggestedPosts,
}: {
  postContent: PostContent
  suggestedPosts: PostMeta[]
}) {
  const pageTitle = `${postContent.title} - ${postContent.titleSuffix}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <article className={`${styles.post} textContent`}>
        <h1 className='font-title text-3xl'>{postContent.title}</h1>
        <div className='my-4'>
          <Date dateString={postContent.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postContent.contentHtml }} />
      </article>

      {/* TODO: setup and enable this */}
      {/* <SharePost /> */}

      <SuggestedPosts posts={suggestedPosts} />
    </Layout>
  )
}
