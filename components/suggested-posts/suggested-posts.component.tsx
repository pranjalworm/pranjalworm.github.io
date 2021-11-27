import { PostMeta } from '../../common/interfaces'
import styles from './suggested-posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { iconLoader } from '../../services/loader.service'

const PostLink = (previous: boolean, post: PostMeta) => {

  let altText: string
  let arrowPath: string
  let postLinkClass: string
  let postHref

  if (previous) {
    arrowPath = 'arrow-back.svg'
    altText = 'Arrow Back'
    postLinkClass = styles.postLinkPrevious
    postHref = `/posts/${post.id}`

  } else {
    arrowPath = 'arrow-forward.svg'
    altText = 'Arrow Forward'
    postLinkClass = styles.postLinkNext
    postHref = `/posts/${post.id}`
  }

  return (
    <Link href={postHref} passHref>
      <div className={postLinkClass}>
        <div className={styles.arrowWrapper}>
          <Image src={arrowPath}
            alt={altText}
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        </div>
        <div className={styles.postTitle}>
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
    <div className={styles.suggestedPosts}>
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
