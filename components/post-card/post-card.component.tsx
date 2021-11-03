import React from 'react'
import { PostType } from '../../services/posts.service'
import Date from '../date/date'
import utilStyles from '../../common/utils.module.css'
import styles from './post-card.module.css'
import Image from 'next/image'
import { PostMeta } from '../../common/interfaces'
import { useRouter } from 'next/router'

export default function PostCard(
  {
    postType,
    post
  }: {
    postType: PostType
    post: PostMeta
  }) {

  const router = useRouter()

  const navigateToPost = () => {

    const hrefToPost = `/${postType}/${post.id}`

    router.push(hrefToPost)
  }

  return (

    <div className={styles.card} key={post.id} onClick={navigateToPost}>

      <div className={styles.imageWrapper}>
        <Image
          src={`/images/${post.thumbnail}`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className={styles.textWrapper}>

        <div className={styles.titleWrapper}>
          {post.title}
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