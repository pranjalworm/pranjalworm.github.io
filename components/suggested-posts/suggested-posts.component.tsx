import { PostMeta } from '../../common/interfaces'
import Link from 'next/link'
import Image from 'next/image'
import { iconLoader } from '../../services/loader.service'
import { getPostTypePath } from '../../common/utils'

const PostLink = (previous: boolean, post: PostMeta) => {

  let altText: string
  let arrowPath: string
  let postHref: string
  let flexDirection = ''

  if (previous) {
    arrowPath = 'arrow-back.svg'
    altText = 'Arrow Back'

  } else {
    arrowPath = 'arrow-forward.svg'
    altText = 'Arrow Forward'
    flexDirection = 'flex-row-reverse'
  }

  const path = getPostTypePath(post.type)

  postHref = `/${path}/${post.id}`

  return (
    <Link href={postHref} passHref>
      <div className={`flex gap-2 items-center hover:cursor-pointer ${flexDirection}`}>
        <div className='flex items-center dark:invert'>
          <Image src={arrowPath}
            alt={altText}
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        </div>
        <div className='font-title' style={{textAlign: previous ? 'left' : 'right'}}>
          {post.title}
        </div>
      </div>
    </Link>

  )
}


const SuggestedPosts = ({
  posts
}: {
  posts: PostMeta[]
}) => {

  const [previousPost, nextPost] = posts

  return (
    <div className='flex justify-between mt-16'>
      {
        previousPost ? PostLink(true, previousPost) : <div></div>
      }

      {
        nextPost ? PostLink(false, nextPost) : <div></div>
      }
    </div>
  )

}

export default SuggestedPosts
