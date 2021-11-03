import { PostsService, PostType } from '../../services/posts.service'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import { PostContent, PostMeta } from '../../common/interfaces'
import Post from '../../components/post/post.component'

const titleSuffix = 'Pranjal Dubey Travel Diary'

export default function TravelDiary({
  postContent,
  suggestedPosts
}: {
  postContent: PostContent,
  suggestedPosts: PostMeta[]
}) {

  postContent.titleSuffix = titleSuffix

  return <Post postContent={postContent} suggestedPosts={suggestedPosts}
    postType={PostType.TravelDiaries} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostsService.getAllPostIds(PostType.TravelDiaries)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const postId = params.id as string
  const postContent = await PostsService.getPostContent(postId, PostType.TravelDiaries)
  // const suggestedPosts = PostsService.getSuggestedPosts(PostType.TravelDiaries, postId)
  const suggestedPosts = []

  return {
    props: {
      postContent,
      suggestedPosts
    }
  }
}