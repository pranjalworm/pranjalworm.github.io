import { PostMeta } from '../../common/interfaces'
import styles from './suggested-posts.module.css'
import Link from 'next/link'

const PostLinkText = (previous: boolean, post: PostMeta) => {

  let altText: string
  let arrowPath: string
  let postLinkClass: string
  let postHref

  if (previous) {
    arrowPath = '/icons/arrow-back.svg'
    altText = 'Arrow Back'
    postLinkClass = styles.postLinkPrevious
    postHref = `/posts/${post.id}`

  } else {
    arrowPath = '/icons/arrow-forward.svg'
    altText = 'Arrow Forward'
    postLinkClass = styles.postLinkNext
    postHref = `/posts/${post.id}`
  }

  return (
    <Link href={postHref} >
      <div className={postLinkClass}>
        <div className={styles.arrowWrapper}>
          <img src={arrowPath} alt={altText} />
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
        previousPost ? PostLinkText(true, previousPost) : <div></div>
      }

      {
        nextPost ? PostLinkText(false, nextPost) : <div></div>
      }
    </div>
  )

}

export default SuggestedPosts
