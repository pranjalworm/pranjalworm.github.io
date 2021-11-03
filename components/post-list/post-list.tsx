import Layout from '../layout/layout'
import { PostType } from '../../services/posts.service'
import Head from 'next/head'
import React from 'react'
import SectionList from '../section-list/section-list'
import { PostMeta } from '../../common/interfaces'

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
    postsData: PostMeta[]
  }) {

  return (
    <Layout>

      <Head>
        <title>{titleSuffix}</title>
      </Head>

      <SectionList
        sectionHeading={pageHeading}
        postType={postType}
        postsData={postsData} />

    </Layout>
  )
}