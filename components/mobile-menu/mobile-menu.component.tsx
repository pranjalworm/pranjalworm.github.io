import Link from 'next/link'
import { useRouter } from 'next/router'

const Menu = ({ show }: {
  show: boolean
}) => {

  const router = useRouter()
  const currentPath = router.pathname

  const menuItemStyle = 'font-light text-2xl mb-8 select-none animate-[moveUp_0.4s_ease-out]'

  const getClass = (path: string) => {

    if (currentPath === path) {
      return `${menuItemStyle} border-b border-black`
    }

    return `${menuItemStyle} hover:cursor-pointer`
  }

  return show ? (
    <nav className='fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center bg-white/80 backdrop-blur z-10 justify-center animate-[fadeIn_0.2s_ease-in]'>

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

export default Menu