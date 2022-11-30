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

        <p>Apenas anotando o que pensei em criar</p>
        
        <ul>
          <li>Resumo/Sobre mim</li>
          <li>
            O que estou fazendo hoje
            <ul>
              <li>Cursos</li>
            </ul>
          </li>
          <li>
            Projetos/Artigos/Videos/Skills/Empresas/Status(em andamento, concluído)
            <ul>
              <li>Games</li>
              <li>Apps</li>
              <li>
                Websites
                <ul>
                  <li>PDI</li>
                  <li>Planning Pocker Free</li>
                </ul>
              </li>
              <li>
                Extensões
                <ul>
                  <li>Github Team Pull Requests for VSCode</li>
                  <li>Github Team Pull Requests for Chrome</li>
                </ul>
              </li>
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
