import React from 'react'
import Date from '../date/date.component'
import styles from './post-card.module.css'
import Image from 'next/image'
import { PostMeta } from '../../common/interfaces'
import { useRouter } from 'next/router'
import { imageLoader } from '../../services/loader.service'

export default function PostCard(
  {
    post
  }: {
    post: PostMeta
  }) {

  const router = useRouter()

  const navigateToPost = () => {

    const hrefToPost = `/posts/${post.id}`

    router.push(hrefToPost)
  }

  return (

    <div className={styles.card} key={post.id} onClick={navigateToPost}>

      <div className={styles.imageWrapper}>
        <Image
          src={`${post.thumbnail}`}
          layout='fill'
          objectFit='cover'
          alt=''
          loader={imageLoader}
        />
      </div>

      <div className={styles.textWrapper}>

        <div className={styles.dateWrapper}>
          <Date dateString={post.date} />
        </div>

        <div className={styles.title}>
          {post.title}
        </div>

        <div className='textContent'>
          {post.description}
        </div>

        <div className={styles.readMore}>
          Read more
        </div>

      </div>

    </div>

  )
}