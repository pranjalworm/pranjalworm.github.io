import styles from './app-header.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from '../mobile-menu/mobile-menu.component'

const AppHeader = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const mobileMenuButtonRef = useRef(null)


  const mobileMenuButtonClicked = () => {

    menuOpened ? setMenuOpened(false) : setMenuOpened(true)
  }


  const disableScroll = (disable: boolean) => {

    if (disable) {
      document.body.classList.add('disableScroll')
    } else {
      document.body.classList.remove('disableScroll')
    }
  }


  // for animating mobile menu button
  useEffect(() => {

    const buttonRef = mobileMenuButtonRef?.current

    if (menuOpened) {
      (buttonRef as any).classList.add(styles.menuOpen)
      disableScroll(true)
    } else {
      (buttonRef as any).classList.remove(styles.menuOpen)
      disableScroll(false)
    }

  }, [menuOpened])


  return (
    <header className={styles.headerWrapper}>

      <div className={styles.header}>

        <Link href='/' passHref>
          <div className={styles.siteHeading}>
            Pranjal Dubey
          </div>
        </Link>

        <div id={styles.mobileMenuButton}
          onClick={mobileMenuButtonClicked}
          ref={mobileMenuButtonRef}>

          <div id={styles.menuLine1} className={styles.menuLine} />
          <div id={styles.menuLine2} className={styles.menuLine} />
        </div>

      </div>

      <MobileMenu show={menuOpened} />

    </header>
  )
}

export default AppHeader