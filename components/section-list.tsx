import { PostType } from '../services/posts.service'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import React from 'react'
import Link from 'next/link'

export default function SectionList(
  {
    sectionHeading,
    postType,
    postsData
  }: {
    sectionHeading: string,
    postType: PostType,
    postsData: {
      date: string
      title: string
      id: string,
      description?: string
    }[]
  }) {

  return (

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <h2 className={utilStyles.headingLg}>{sectionHeading}</h2>

      <ul className={utilStyles.list}>
        {postsData.map(({ id, date, title, description }) => (
          <li className={utilStyles.listItem} key={id}>
            <Link href={`/${postType}/${id}`}>
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
  )
}