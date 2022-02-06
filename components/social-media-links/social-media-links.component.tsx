import Image from 'next/image'
import { useRouter } from 'next/router'
import { iconLoader } from '../../services/loader.service'

const twitterLinkId = 'twitter-link'
const instagramLinkId = 'instagram-link'
const emailLinkId = 'email-link'
const linkedInLinkId = 'linkedin-link'
const goodreadsLinkId = 'goodreads-link'
const githubLinkId = 'github-link'

const WebLinks = [
  {
    id: twitterLinkId,
    link: 'https://twitter.com/pranjaldy',
    alt: 'Twitter',
    src: 'twitter.svg'
  },
  {
    id: instagramLinkId,
    link: 'http://instagram.com/pranjalworm/',
    alt: 'Instagram',
    src: 'instagram.svg'
  },
  {
    id: emailLinkId,
    link: 'mailto:hi@pranjaldubey.com',
    alt: 'Email',
    src: 'email.svg'
  },
  {
    id: linkedInLinkId,
    link: 'https://www.linkedin.com/in/pranjal-dubey/',
    alt: 'LinkedIn',
    src: 'linkedin.svg'
  },
  {
    id: goodreadsLinkId,
    link: 'https://www.goodreads.com/user/show/26285683-pranjal-dubey',
    alt: 'Goodreads',
    src: 'goodreads.svg'
  },
  {
    id: githubLinkId,
    link: 'https://github.com/pranjalworm',
    alt: 'Github',
    src: 'github.svg'
  },

]

const getLink = (linkId: string) => {

  for (const item of WebLinks) {

    if (item.id === linkId) {

      return item.link
    }
  }
}

const SocialMediaLinks = () => {

  const router = useRouter()

  const openLink = (event: any) => {

    const targetId = event.target.id

    const link = getLink(targetId)

    router.push(link as string)

  }

  return (
    <div onClick={openLink}
      className='flex justify-between items-center m-auto h-16 max-w-screen-md dark:invert'>
      {
        WebLinks.map((linkItem) => (
          <Image src={linkItem.src}
            className='hover:cursor-pointer'
            key={linkItem.id}
            id={linkItem.id}
            alt={linkItem.alt}
            layout='fixed'
            width='24'
            height='24'
            loader={iconLoader} />
        ))
      }

    </div>
  )
}

export default SocialMediaLinks