import React from 'react'
import { PostType } from '../../services/posts.service'
import utilStyles from '../../common/utils.module.css'
import styles from './section-list.module.css'
import { PostMeta } from '../../common/interfaces'
import PostCard from '../post-card/post-card.component'

export default function SectionList(
  {
    sectionHeading,
    postType,
    postsData
  }: {
    sectionHeading: string,
    postType: PostType,
    postsData: PostMeta[]
  }) {

  return (

    <section className={`${utilStyles.headingMd}`}>

      <h2 className={utilStyles.headingLg}>{sectionHeading}</h2>

      <div className={styles.sectionList}>

        {postsData.map((post: PostMeta) => (
          <div className={utilStyles.listItem} key={post.id}>

            <PostCard postType={postType} post={post} />

          </div>
        ))}

      </div>
    </section>
  )
}