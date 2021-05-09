import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { DefaultPostCount, PostsService, PostType } from '../services/posts.service'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import React from 'react'
import SectionList from '../components/section-list'

export default function Home({ allPostsData }: {
  allPostsData: {
    photoPostsData: {
      date: string
      title: string
      id: string,
      description?: string
    }[],
    blogPostsData: {
      date: string
      title: string
      id: string,
      description?: string
    }[],
    projectPostsData: {
      date: string
      title: string
      id: string,
      description?: string
    }[]
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

      {/* Photo Blog */}
      <SectionList
        sectionHeading='Photo Blogs'
        postType={'photo-blog' as PostType}
        postsData={allPostsData.photoPostsData}>
      </SectionList>

      <div className={utilStyles.seeAll}>
        <Link href={`/photo-blog/`}>
          <a>all photo blogs →</a>
        </Link>
      </div>

      {/* Blog Posts */}
      <SectionList
        sectionHeading='Blog Posts'
        postType={'blog-posts' as PostType}
        postsData={allPostsData.blogPostsData}>
      </SectionList>

      <div className={utilStyles.seeAll}>
        <Link href={`/blog-posts/`}>
          <a>all blog posts →</a>
        </Link>
      </div>


      {/* Project Posts */}
      <SectionList
        sectionHeading='Projects'
        postType={'projects' as PostType}
        postsData={allPostsData.projectPostsData}>
      </SectionList>

      <div className={utilStyles.seeAll}>
        <Link href={`/projects/`}>
          <a>all projects →</a>
        </Link>
      </div>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>About me</h2>

        <div className={utilStyles.content}>
          I am a programmer by profession.<br />
          I am big time into photography.<br />
          I like reading almost anything interesting I can get my hands on.<br />
          I love traveling.<br />

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

  const photoPostsData = PostsService.getSortedPostsData(PostType.PhotoBlog, DefaultPostCount)
  const blogPostsData = PostsService.getSortedPostsData(PostType.BlogPost, DefaultPostCount)
  const projectPostsData = PostsService.getSortedPostsData(PostType.Project, DefaultPostCount)

  return {
    props: {
      allPostsData: {
        photoPostsData,
        blogPostsData,
        projectPostsData
      }
    }
  }
}