import { PostsService, PostType } from '../../services/posts.service'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import Post from '../../components/post/post.component'
import { PostContent, PostMeta } from '../../common/interfaces'

const titleSuffix = 'Pranjal Dubey Blog Post'

export default function BlogPosts({
  postContent,
  suggestedPosts
}: {
  postContent: PostContent,
  suggestedPosts: PostMeta[]
}) {

  postContent.titleSuffix = titleSuffix

  return <Post postContent={postContent} suggestedPosts={suggestedPosts}
    postType={PostType.BlogPost} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostsService.getAllPostIds(PostType.BlogPost)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const postId = params.id as string

  console.log('blog posts > id > postId', postId)
  console.log(params)

  const postContent = await PostsService.getPostContent(postId, PostType.BlogPost)
  // const suggestedPosts = PostsService.getSuggestedPosts(PostType.BlogPost, postId)
  const suggestedPosts = []


  console.log('suggestedPosts')
  console.log(suggestedPosts)

  return {
    props: {
      postContent,
      suggestedPosts
    }
  }
}