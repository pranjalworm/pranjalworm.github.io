import styles from './app-footer.module.css'
import SocialMediaLinks from '../social-media-links/social-media-links.component'

const AppFooter = () => {


  return (
    <footer className={styles.footer}>

      <div>
        © Pranjal Dubey
      </div>

      <SocialMediaLinks />

    </footer>
  )
}

export default AppFooter