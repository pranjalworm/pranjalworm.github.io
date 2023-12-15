import React from 'react'
import Date from '../Date/Date.component'
import Image from 'next/image'
import { PostMeta } from '../../common/interfaces'
import { useRouter } from 'next/router'
import { imageLoader } from '../../services/loader.service'
import { getPostTypePath } from '../../common/utils'

export default function PostCard({ post }: { post: PostMeta }) {
  const router = useRouter()

  const navigateToPost = () => {
    const path = getPostTypePath(post.type)

    const hrefToPost = `/${path}/${post.id}`

    router.push(hrefToPost)
  }

  return (
    <div
      key={post.id}
      onClick={navigateToPost}
      className='flex flex-col md:flex-row justify-between w-full hover:cursor-pointer'>
      <div className='relative flex justify-center items-center h-[250px] mb-4 max-w-screen-md c-md-min-w-half'>
        <Image
          src={`${post.thumbnail}`}
          alt=''
          loader={imageLoader}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      <div className='c-md-ml-16 grow'>
        <div className='mb-4'>
          <Date dateString={post.date} />
        </div>

        <div className='text-3xl font-title mb-4'>{post.title}</div>

        <div className='textContent'>{post.description}</div>
      </div>
    </div>
  )
}
