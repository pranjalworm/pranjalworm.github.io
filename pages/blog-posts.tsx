import { PostsService, PostType } from '../services/posts.service'
import { GetStaticProps } from 'next'
import React from 'react'
import PostList from '../components/post-list/post-list'
import { PostMeta } from '../common/interfaces'

const titleSuffix = 'Blog Posts - Pranjal Dubey'
const pageHeading = 'Blog Posts'

export default function BlogPost(
  {
    titleSuffix,
    pageHeading,
    postType,
    postsData
  }: {
    titleSuffix: string,
    pageHeading: string,
    postType: PostType,
    postsData: PostMeta[]
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

  const postsData = PostsService.getSortedPostsData(PostType.BlogPost)

  return {
    props: {
      titleSuffix,
      pageHeading,
      postType: PostType.BlogPost,
      postsData
    }
  }
}