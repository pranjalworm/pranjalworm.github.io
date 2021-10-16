import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../common/utils.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const name = 'Pranjal Dubey'
export const siteTitle = 'Pranjal Dubey'

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {

  const router = useRouter();

  return (
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

      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.webp"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.webp"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div className={styles.backToHome} onClick={() => {
          router.back()
        }}>
          <a>← Go back</a>
        </div>
      )}
    </div>
  )
}
