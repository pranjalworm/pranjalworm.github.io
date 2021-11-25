import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './mobile-menu.module.css'

const MobileMenu = ({ show }: {
  show: boolean
}) => {

  const router = useRouter()
  const currentPath = router.pathname

  const getClass = (path: string) => {

    if (currentPath === path) {
      return styles.menuItem + ' ' + styles.linkDisabled
    }

    return styles.menuItem
  }

  return show ? (
    <nav className={styles.navLinks}>

      <Link href='/' passHref>
        <div className={getClass('/')}>
          Blog
        </div>
      </Link>


      <Link href='/about' passHref>
        <div className={getClass('/about')}>
          About
        </div>
      </Link>

    </nav>
  ) : null

}

export default MobileMenu