import { PostsService, PostType } from '../../services/posts.service'
import { GetStaticProps, GetStaticPaths } from 'next'
import React from 'react'
import PostContent from '../../components/post-content'

const titleSuffix = 'Pranjal Dubey Project'

export default function Projects({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {

  const pageTitle = `${postData.title} - ${titleSuffix}`

  return (
    <PostContent
      pageTitle={pageTitle}
      date={postData.date}
      contentHtml={postData.contentHtml}>
    </PostContent>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostsService.getAllPostIds(PostType.Project)
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await PostsService.getPostData(params.id as string, PostType.Project)
  return {
    props: {
      postData
    }
  }
}