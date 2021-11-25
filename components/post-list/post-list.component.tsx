import React from 'react'
import { PostMeta } from '../../common/interfaces'
import PostCard from '../post-card/post-card.component'
import styles from './post-list.module.css'

function PostList(
  {
    postsData
  }: {
    postsData: PostMeta[]
  }) {

  return (
    <>
      {
        postsData.map((post: PostMeta) => (
          <div key={post.id} className={styles.postList}>

            <PostCard post={post} />

          </div>
        ))
      }
    </>
  )
}

export default PostList