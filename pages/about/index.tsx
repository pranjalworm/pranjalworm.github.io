import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Image from "next/legacy/image"
import { imageLoader } from '../../services/loader.service'

const About = () => {
  const siteTitle = 'About - Pranjal Dubey'
  const aboutImage = 'pranjal-about.webp'

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className='relative block my-0 mx-auto md:w-1/2'>
        <Image
          src={aboutImage}
          layout='responsive'
          width='200'
          height='300'
          priority
          alt='Portrait of Pranjal Dubey'
          loader={imageLoader}
        />
      </div>

      <div className={`mt-8 textContent`}>
        <p className='mb-4'>
          I am frontend developer (transitioning to full-stack) based out of
          Bangalore.
        </p>

        <p className='mb-4'>
          I like reading just about anything interesting, traveling and
          capturing silhouettes during my free time.
        </p>

        <p className='mb-4'>
          My mom&apos;s Pau Bhaji &amp; Pizza are life for me.
        </p>
      </div>
    </Layout>
  )
}

export default About
