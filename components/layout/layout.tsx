import Head from 'next/head'
import styles from './layout.module.css'
import AppHeader from '../app-header/app-header.component'
import AppFooter from '../app-footer/app-footer.component'

export const siteTitle = 'Pranjal Dubey'

export default function Layout({ children }: {
  children: React.ReactNode
}) {

  return (
    <>

      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Pranjal Dubey's personal blogging website"
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <AppHeader />

        <main>{children}</main>

      </div>

      <AppFooter />
    </>
  )
}
