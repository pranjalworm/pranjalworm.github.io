import Layout from '../../components/layout/layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from './about.module.css'
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
          Pranjal Dubey is a Bangalore based programmer currently working in Freshworks.
        </p>

        <p className='mb-4'>
          He&apos;s also a part time photographer and loves creating silhouettes.
        </p>

        <p className='mb-4'>
          He has an OCD for reading almost anything interesting he can get his hands on or at least adding them to an ever growing to-read list.
        </p>
        <p className='mb-4'>
          Pau Bhaji is life for him.
        </p>
      </div>

    </Layout>
  )

}

export default About

