import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import { PostsService } from '../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import { PostMeta } from '../common/interfaces'
import PostList from '../components/post-list/post-list.component'
// import Signup from '../components/signup/signup.component'

export default function Home({ allPostsData }: {
  allPostsData: PostMeta[]
}) {

  return (
    <Layout>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <PostList postsData={allPostsData} />

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const allPostsData = PostsService.getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}