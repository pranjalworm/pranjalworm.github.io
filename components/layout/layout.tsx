import Head from 'next/head'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter'
import { siteTitle } from '../../common/constants'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='max-w-screen-md min-h-screen flex flex-col px-4 mt-8 mx-auto dark:text-white'>
        <Head>
          <link
            rel='icon'
            href='/favicon.ico'
          />
          <meta
            name='description'
            content="Pranjal Dubey's personal blogging website"
          />
          <meta
            name='og:title'
            content={siteTitle}
          />
          <meta
            name='twitter:card'
            content='summary_large_image'
          />
        </Head>

        <AppHeader />

        <main className='grow'>{children}</main>
      </div>

      <AppFooter />
    </>
  )
}
