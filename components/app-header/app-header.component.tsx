import styles from './app-header.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Menu from '../mobile-menu/menu.component'
import Image from 'next/image'
import { imageLoader } from '../../services/loader.service'

const AppHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const mobileMenuButtonRef = useRef(null)

  const menuLineStyle =
    'border-t border-black w-full duration-100 dark:border-white'

  const mobileMenuButtonClicked = () => {
    menuOpened ? setMenuOpened(false) : setMenuOpened(true)
  }

  const disableScroll = (disable: boolean) => {
    if (disable) {
      document.body.classList.add('disableScroll')
      document.body.style.position = 'fixed'
    } else {
      document.body.classList.remove('disableScroll')
      document.body.style.position = 'static'
    }
  }

  // for animating mobile menu button
  useEffect(() => {
    const buttonRef = mobileMenuButtonRef?.current

    if (menuOpened) {
      ;(buttonRef as any).classList.add(styles.menuOpen)
      disableScroll(true)
    } else {
      ;(buttonRef as any).classList.remove(styles.menuOpen)
      disableScroll(false)
    }
  }, [menuOpened])

  return (
    <div className='relative mb-28'>
      <div className='fixed top-0 left-0 right-0 h-28 flex px-4 m-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur z-50 max-w-screen-md'>
        <div className='flex items-center justify-between w-full z-10'>
          <Link
            href='/'
            passHref
            className='nav-link'>
            <div className='flex items-center hover:cursor-pointer z-50'>
              <div className='mr-4'>
                <Image
                  src='pranjal-profile-pic.webp'
                  className='rounded-full'
                  alt='Pranjal Dubey Photograph'
                  layout='fixed'
                  width='50'
                  height='50'
                  loader={imageLoader}
                />
              </div>

              <div className='font-title text-4xl text-black dark:text-white'>
                Pranjal Dubey
              </div>
            </div>
          </Link>

          <div
            className='flex flex-col align-center justify-center w-9 h-12 z-20 hover:cursor-pointer'
            onClick={mobileMenuButtonClicked}
            ref={mobileMenuButtonRef}>
            <div
              id={styles.menuLine1}
              className={`${menuLineStyle} mb-2 dark:border-white`}
            />
            <div
              id={styles.menuLine2}
              className={menuLineStyle}
            />
          </div>
        </div>
      </div>

      <Menu show={menuOpened} />
    </div>
  )
}

export default AppHeader
