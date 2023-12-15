import React from 'react'
import { PostMeta } from '../../common/interfaces'
import PostCard from '../PostCard'

function PostList({ postsData }: { postsData: PostMeta[] }) {
  return (
    <>
      {postsData.map((post: PostMeta) => (
        <div
          key={post.id}
          className='flex flex-col mb-24'>
          <PostCard post={post} />
        </div>
      ))}
    </>
  )
}

export default PostList
