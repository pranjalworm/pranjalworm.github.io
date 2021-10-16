import React from 'react'
import { PostType } from '../../services/posts.service'
import utilStyles from '../../common/utils.module.css'
import styles from './section-list.module.css'
import { Post } from '../../common/interfaces'
import PostCard from '../post-card/post-card.component'

export default function SectionList(
  {
    sectionHeading,
    postType,
    postsData
  }: {
    sectionHeading: string,
    postType: PostType,
    postsData: Post[]
  }) {

  return (

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

      <h2 className={utilStyles.headingLg}>{sectionHeading}</h2>

      <ul className={styles.sectionList}>
        {postsData.map((post: Post) => (
          <li className={utilStyles.listItem} key={post.id}>

            <PostCard postType={postType} post={post} />

          </li>
        ))}
      </ul>
    </section>
  )
}