import styles from './share-post.module.css'
import Image from 'next/image'
import { iconLoader } from '../../services/loader.service'

const SharePost = () => {

  // TODO: in future make use of social media links component
  return (
    <div className={styles.sharePost}>
      <div className={styles.shareTitle}>
        Share this post
      </div>

      <div className={styles.shareLinksIconsWrapper}>
        <div>
          <Image src='share.svg'
            alt='Copy post link'
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        </div>

        <div>
          <Image src='twitter.svg'
            alt='Share on Twitter'
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        </div>

        <div>
          <Image src='email.svg'
            alt='Email to friend'
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        </div>

      </div>
    </div>
  )
}

export default SharePost