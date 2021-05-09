import Layout from '../components/layout'
import { PostType } from '../services/posts.service'
import Head from 'next/head'
import React from 'react'
import SectionList from './section-list'

export default function PostList(
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
    <Layout>

      <Head>
        <title>{titleSuffix}</title>
      </Head>

      <SectionList
        sectionHeading={pageHeading}
        postType={postType}
        postsData={postsData}>
      </SectionList>

    </Layout>
  )
}