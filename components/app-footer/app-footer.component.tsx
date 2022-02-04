import styles from './app-footer.module.css'
import SocialMediaLinks from '../social-media-links/social-media-links.component'

const AppFooter = () => {

  return (
    <footer className='text-gray-500 bg-gray-100 text-center p-8 mt-24'>

      <div>
        © Pranjal Dubey
      </div>

      <SocialMediaLinks />

    </footer>
  )
}

export default AppFooter