import { PostsService, PostType } from '../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import PostList from '../components/post-list'

const titleSuffix = 'Photo Blogs - Pranjal Dubey'
const pageHeading = 'Photo Blogs'

export default function PhotoBlog(
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

  const postsData = PostsService.getSortedPostsData(PostType.PhotoBlog)

  return {
    props: {
      titleSuffix,
      pageHeading,
      postType: PostType.PhotoBlog,
      postsData
    }
  }
}