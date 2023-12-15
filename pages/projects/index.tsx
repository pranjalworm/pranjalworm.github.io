import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import { PostsService } from '../../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import { PostMeta, PostType } from '../../common/interfaces'
import PostList from '../../components/PostList/PostList'
import { siteTitle } from '../../common/constants'

export default function ProjectsPage({
  allPostsData,
}: {
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
  const allPostsData = PostsService.getSortedPostsData(PostType.Project)

  return {
    props: {
      allPostsData,
    },
  }
}
