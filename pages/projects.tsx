import { PostsService, PostType } from '../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import PostList from '../components/post-list'

const titleSuffix = 'Projects - Pranjal Dubey'
const pageHeading = 'Projects'

export default function Projects(
  {
    titleSuffix,
    pageHeading,
    postType,
    postsData
  }: {
    titleSuffix: string,
    pageHeading: string,
    postType: PostType,
    postsData: {
      date: string
      title: string
      id: string,
      description?: string
    }[]
  }) {

  return (
    <PostList
      titleSuffix={titleSuffix}
      pageHeading={pageHeading}
      postType={postType}
      postsData={postsData} />
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const postsData = PostsService.getSortedPostsData(PostType.Project)

  return {
    props: {
      titleSuffix,
      pageHeading,
      postType: PostType.Project,
      postsData
    }
  }
}