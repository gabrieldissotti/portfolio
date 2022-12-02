import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gabriel Dissotti</title>
        <meta name="description" content="Gabriel Dissotti Portfolio" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      
      <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `
window.addEventListener('mouseover', initLandbot, { once: true });
window.addEventListener('touchstart', initLandbot, { once: true });
var myLandbot;
function initLandbot() {
  if (!myLandbot) {
    var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
    s.addEventListener('load', function() {
      var myLandbot = new Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1428860-ZSR3C18XQWPG1620/index.json',
      });
    });
    s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
}
          
          `,
        }}
      />

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
