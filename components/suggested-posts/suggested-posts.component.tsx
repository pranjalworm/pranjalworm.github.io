import { PostMeta } from '../../common/interfaces'
import { PostType } from '../../services/posts.service'
import PostCard from '../post-card/post-card.component'
import styles from './suggested-posts.module.css'

const SuggestedPosts = ({
  posts,
  postType
}: {
  posts: PostMeta[],
  postType: PostType
}) => {

  const [post1, post2] = posts

  return (
    <div className={styles.suggestedPosts}>
      {
        post1 ?
          <div>
            <div>
              Previous Post
            </div>
            <PostCard postType={postType} post={post1} />
          </div>
          :
          null
      }

      {
        post2 ?
          <div>
            Next Post
            <PostCard postType={postType} post={post2} />
          </div>
          :
          null
      }

    </div>
  )

}

export default SuggestedPosts
