import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../common/utils.module.css'
import { DefaultPostCount, PostsService, PostType } from '../services/posts.service'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import React from 'react'
import SectionList from '../components/section-list/section-list'
import { PostMeta } from '../common/interfaces'

export default function Home({ allPostsData }: {
  allPostsData: {
    travelPostsData: PostMeta[],
    blogPostsData: PostMeta[],
    projectPostsData: PostMeta[]
  }
}) {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Travel Diaries*/}
      <SectionList
        sectionHeading='Travel Diaries'
        postType={'travel-diaries' as PostType}
        postsData={allPostsData.travelPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/travel-diaries/`}>
          <div className={utilStyles.seeAllButton}>All Travel Diaries →</div>
        </Link>
      </div>


      {/* Blog Posts */}
      <SectionList
        sectionHeading='Blog Posts'
        postType={'blog-posts' as PostType}
        postsData={allPostsData.blogPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/blog-posts/`}>
          <div className={utilStyles.seeAllButton}>All Blog Posts →</div>
        </Link>
      </div>


      {/* Project Posts */}
      <SectionList
        sectionHeading='Projects'
        postType={'projects' as PostType}
        postsData={allPostsData.projectPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/projects/`}>
          <div className={utilStyles.seeAllButton}>All Projects →</div>
        </Link>
      </div>

    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const travelPostsData = PostsService.getSortedPostsData(PostType.TravelDiaries, DefaultPostCount)
  const blogPostsData = PostsService.getSortedPostsData(PostType.BlogPost, DefaultPostCount)
  const projectPostsData = PostsService.getSortedPostsData(PostType.Project, DefaultPostCount)

  return {
    props: {
      allPostsData: {
        travelPostsData,
        blogPostsData,
        projectPostsData
      }
    }
  }
}