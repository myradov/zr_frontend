import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='relative w-full h-auto'>
      <Head>
        <title>ZE - Home Page</title>
        <meta name="description" content="Zerur Electronics - Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative w-full h-auto pt-24'>
        <h1 className='bg-main'>Zerur</h1>
        <h1 className='bg-green-400'>Zerur</h1>
        Hello from Zerur Electronics
      </main>
    </div>
  )
}
