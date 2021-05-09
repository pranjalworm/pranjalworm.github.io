import Layout from '../../components/layout'
import { PostsService, PostType } from '../../services/posts.service'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

const titleSuffix = 'Pranjal Dubey Photo Blog'

export default function PhotoBlog({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} - {titleSuffix}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.note}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostsService.getAllPostIds(PostType.PhotoBlog)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await PostsService.getPostData(params.id as string, PostType.PhotoBlog)
  return {
    props: {
      postData
    }
  }
}