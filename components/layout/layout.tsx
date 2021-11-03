import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../common/utils.module.css'
import Link from 'next/link'
// import { useRouter } from 'next/router'

const name = 'Pranjal Dubey'
export const siteTitle = 'Pranjal Dubey'

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {

  // const router = useRouter();

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

      </div>
      <footer className={styles.footer}>

        <div>
          <h2 className={styles.footerHeading}>About</h2>

          <p>
            Pranjal Dubey is a programmer and part time photographer.
            He has an OCD for reading almost anything interesting he can get his hands on.
            Pranjal Dubey is a programmer and part time photographer.
            He has an OCD for reading almost anything interesting he can get his hands on.
          </p>

          <p>
            Pranjal Dubey is a programmer and part time photographer.
            He has an OCD for reading almost anything interesting he can get his hands on.
          </p>
          <p>
            Pranjal Dubey is a programmer and part time photographer.
            He has an OCD for reading almost anything interesting he can get his hands on.
          </p>

        </div>

        <div>

          <h2 className={styles.footerHeading}>Quick Links</h2>

          <Link href='/travel-diaries'>Travel Diaries →</Link><br />
          <Link href='/blog-posts'>Blog Posts →</Link><br />
          <Link href='/projects'>Projects →</Link><br />

        </div>

        <div>
          <h2 className={styles.footerHeading}>Contact</h2>

          Email: <a href="mailto:hi@pranjaldubey.com">hi@pranjaldubey.com</a><br />
          Twitter: <a href="https://twitter.com/pranjaldy">@pranjaldy</a>

        </div>

      </footer>
    </>
  )
}
