import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout/layout'
import { PostsService } from '../../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import { PostMeta, PostType } from '../../common/interfaces'
import PostList from '../../components/post-list/post-list.component'

export default function ProjectsPage({ allPostsData }: {
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
      allPostsData
    }
  }
}