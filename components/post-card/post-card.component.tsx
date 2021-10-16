import React from 'react'
import { PostType } from '../../services/posts.service'
import Date from '../date/date'
import utilStyles from '../../common/utils.module.css'
import styles from './post-card.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '../../common/interfaces'

export default function PostCard(
  {
    postType,
    post
  }: {
    postType: PostType
    post: Post
  }) {

  return (

    <div className={styles.card} key={post.id}>

      <div className={styles.imageWrapper}>
        <Image
          src={`/images/${post.thumbnail}`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className={styles.textWrapper}>

        <div className={styles.titleWrapper}>
          <Link href={`/${postType}/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </div>

        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            {post.description}
          </div>

          <small className={utilStyles.note}>
            <Date dateString={post.date} />
          </small>
        </div>

      </div>

    </div>

  )
}