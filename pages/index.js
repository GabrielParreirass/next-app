import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head><title>Pagina Pricipal</title></Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Hello World</h1>
        <Image src={'/images/city.jpg'} width='300px' height='400px' alt='cidade' />
      </div>
    </>
  )
}
