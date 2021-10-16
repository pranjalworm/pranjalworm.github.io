import { PostsService, PostType } from '../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import PostList from '../components/post-list/post-list'
import { Post } from '../common/interfaces'

const titleSuffix = 'Travel Diaries - Pranjal Dubey'
const pageHeading = 'Travel Diaries'

export default function TravelDiaries(
  {
    titleSuffix,
    pageHeading,
    postType,
    postsData
  }: {
    titleSuffix: string,
    pageHeading: string,
    postType: PostType,
    postsData: Post[]
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

  const postsData = PostsService.getSortedPostsData(PostType.TravelDiaries)

  return {
    props: {
      titleSuffix,
      pageHeading,
      postType: PostType.TravelDiaries,
      postsData
    }
  }
}