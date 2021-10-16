import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout/layout'
import utilStyles from '../common/utils.module.css'
import { DefaultPostCount, PostsService, PostType } from '../services/posts.service'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import React from 'react'
import SectionList from '../components/section-list/section-list'
import { Post } from '../common/interfaces'

export default function Home({ allPostsData }: {
  allPostsData: {
    travelPostsData: Post[],
    blogPostsData: Post[],
    projectPostsData: Post[]
  }
}) {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p className={utilStyles.headingCenter}>
          Coder. Photographer. Reader. Traveler.
        </p>
      </section>

      {/* Travel Diaries*/}
      <SectionList
        sectionHeading='Travel Diaries'
        postType={'travel-diaries' as PostType}
        postsData={allPostsData.travelPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/travel-diaries/`}>
          <a>all travel diaries →</a>
        </Link>
      </div>


      {/* Blog Posts */}
      <SectionList
        sectionHeading='Blog Posts'
        postType={'blog-posts' as PostType}
        postsData={allPostsData.blogPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/blog-posts/`}>
          <a>all blog posts →</a>
        </Link>
      </div>


      {/* Project Posts */}
      <SectionList
        sectionHeading='Projects'
        postType={'projects' as PostType}
        postsData={allPostsData.projectPostsData} />

      <div className={utilStyles.seeAll}>
        <Link href={`/projects/`}>
          <a>all projects →</a>
        </Link>
      </div>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About</h2>

        <div className={utilStyles.content}>
          Pranjal Dubey is a programmer and part time photographer.
          He has kind of an OCD for reading almost anything interesting he can get his hands on.
          <p>
            Email: <a href="mailto:hi@pranjaldubey.com">hi@pranjaldubey.com</a><br />
            Twitter: <a href="https://twitter.com/pranjaldy">@pranjaldy</a>
          </p>
        </div>
      </section>

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