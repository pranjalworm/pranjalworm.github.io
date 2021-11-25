import styles from './app-header.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MobileMenu from '../mobile-menu/mobile-menu.component'

const AppHeader = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const mobileMenuButtonRef = useRef(null)

  // for animating mobile menu button
  useEffect(() => {

    const elementRef = mobileMenuButtonRef?.current

    if (menuOpened) {
      (elementRef as any).classList.add(styles.menuOpen)
    } else {
      (elementRef as any).classList.remove(styles.menuOpen)
    }

  }, [menuOpened])

  const mobileMenuButtonClicked = () => {

    menuOpened ? setMenuOpened(false) : setMenuOpened(true)
  }

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