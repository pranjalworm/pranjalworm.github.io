import { PostsService, PostType } from '../../services/posts.service'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

const titleSuffix = 'Pranjal Dubey Blog Post'

export default function BlogPosts({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {

  const pageTitle = `${postData.title} - ${titleSuffix}`

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
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
  const paths = PostsService.getAllPostIds(PostType.BlogPost)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await PostsService.getPostData(params.id as string, PostType.BlogPost)
  return {
    props: {
      postData
    }
  }
}