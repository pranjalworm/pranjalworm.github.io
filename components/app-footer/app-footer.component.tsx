import SocialMediaLinks from '../social-media-links/social-media-links.component'

const AppFooter = () => {

  return (
    <footer className='text-gray-500 bg-gray-100 text-center p-8 mt-24 dark:bg-gray-900 dark:text-white'>

      <SocialMediaLinks />

      <div className='mt-6'>
        © Pranjal Dubey
      </div>

    </footer>
  )
}

export default AppFooter