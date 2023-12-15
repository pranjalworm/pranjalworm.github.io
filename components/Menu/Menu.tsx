import Link from 'next/link'
import { useRouter } from 'next/router'
import ToggleThemeButton from '../ToggleThemeButton'

const Menu = ({ show }: { show: boolean }) => {
  const router = useRouter()

  const currentPath = router.pathname

  const menuItemStyle =
    'font-light text-2xl mb-8 select-none text-black dark:text-white animate-[moveUp_0.4s_ease-out]'

  const getClass = (path: string) => {
    if (currentPath === path) {
      return `${menuItemStyle} border-b border-black dark:border-white`
    }

    return `${menuItemStyle} hover:cursor-pointer`
  }

  return show ? (
    <nav className='fixed top-28 bottom-0 left-0 right-0 flex flex-col items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur z-10 justify-center animate-[fadeIn_0.2s_ease-in]'>
      <Link
        href='/'
        passHref
        className='nav-link'>
        <div className={getClass('/')}>Blog</div>
      </Link>

      <Link
        href='/projects'
        passHref
        className='nav-link'>
        <div className={getClass('/projects')}>Projects</div>
      </Link>

      <Link
        href='/about'
        passHref
        className='nav-link'>
        <div className={getClass('/about')}>About</div>
      </Link>

      <div className='animate-[moveUp_0.4s_ease-out]'>
        <ToggleThemeButton />
      </div>
    </nav>
  ) : null
}

export default Menu
