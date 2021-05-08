import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, PostType } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({ allPostsData }: {
  allPostsData: {
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

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.blogPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog-posts/${id}`}>
                <a>{title}</a>
              </Link>

              <div className={utilStyles.description}>
                {description}
              </div>

              <small className={utilStyles.note}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.projectPostsData.map(({ id, date, title, description }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/projects/${id}`}>
                <a>{title}</a>
              </Link>

              <div className={utilStyles.description}>
                {description}
              </div>

              <small className={utilStyles.note}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>


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
  const blogPostsData = getSortedPostsData(PostType.BlogPost)
  const projectPostsData = getSortedPostsData(PostType.Project)

  return {
    props: {
      allPostsData: {
        blogPostsData,
        projectPostsData
      }
    }
  }
}