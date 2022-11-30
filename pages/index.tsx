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
        
        <ul>
          <li>Resumo/Sobre mim</li>
          <li>
            Projetos/Artigos/Videos/Skills 
            <ul>
              <li>Games</li>
              <li>Apps</li>
              <li>Websites</li>
              <li>
                Chatbots
                <nav>
                  <ul>
                    <li>{/* <img src="" alt="manimarts bot logo"></img> */}<a href="#">Manimarts</a></li>
                  </ul>
                </nav>
              </li>
            </ul>
          </li>
        </ul>

        
      </main>
    </div>
  )
}
