import { PostsService } from '../../services/posts.service'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Post from '../../components/post/post.component'
import { PostContent, PostMeta } from '../../common/interfaces'

const titleSuffix = 'Pranjal Dubey'

export default function BlogPosts({
  postContent,
  suggestedPosts
}: {
  postContent: PostContent,
  suggestedPosts: PostMeta[]
}) {

  postContent.titleSuffix = titleSuffix

  return (
    <Post postContent={postContent} suggestedPosts={suggestedPosts} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostsService.getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const postId = params?.id as string
  const postContent = await PostsService.getPostContent(postId)
  const suggestedPosts = PostsService.getSuggestedPosts(postId)

  return {
    props: {
      postContent,
      suggestedPosts
    }
  }
}