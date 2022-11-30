import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel Dissotti</title>
        <meta name="description" content="Gabriel Dissotti Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página em construção
        </h1>

        <h2>Projetos</h2>
        <ul>
          <li>Games</li>
          <li>Apps</li>
          <li>Websites</li>
          <li>Chatbots</li>
        </ul>
      </main>
    </div>
  )
}
