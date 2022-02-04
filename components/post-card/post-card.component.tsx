import React from 'react'
import Date from '../date/date.component'
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

    <div key={post.id} onClick={navigateToPost}
      className='flex flex-row justify-between w-full hover:cursor-pointer'>

      <div className='relative flex justify-center items-center h-250px mb-4 max-w-screen-md c-md-min-w-half'>
        <Image
          src={`${post.thumbnail}`}
          layout='fill'
          objectFit='cover'
          alt=''
          loader={imageLoader}
        />
      </div>

      <div className='c-md-ml-16 grow'>

        <div className='mb-4'>
          <Date dateString={post.date} />
        </div>

        <div className='text-3xl font-title mb-4'>
          {post.title}
        </div>

        <div className='textContent'>
          {post.description}
        </div>

        <div className='text-sm text-gray-400 font-light my-4 border-b w-fit'>
          Read more
        </div>

      </div>

    </div>

  )
}