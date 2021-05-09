import Layout from '../components/layout'
import Head from 'next/head'
import Date from '../components/date'
import utilStyles from '../../styles/utils.module.css'


export default function PostContent({
  postContent
}: {
  postContent: {
    pageTitle: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postContent.pageTitle}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postContent.pageTitle}</h1>
        <div className={utilStyles.note}>
          <Date dateString={postContent.date} />
        </div>
        <div className={utilStyles.content} dangerouslySetInnerHTML={{ __html: postContent.contentHtml }} />
      </article>
    </Layout>
  )
}