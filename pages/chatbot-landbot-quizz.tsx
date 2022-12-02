import Head from 'next/head'
import Script from 'next/script'

export default function Chatbot() {
  return (
    <div >
      <Head>
        <title>Gabriel Dissotti</title>
        <meta name="description" content="Gabriel Dissotti Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Clique no botão no canto inferior direito!</h1>
      <p>ele leva alguns segundos pra aparecer</p>

      
      <Script
        id="show-"
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('mouseover', initLandbot, { once: true });
            window.addEventListener('touchstart', initLandbot, { once: true });
            var myLandbot;
            function initLandbot() {
              if (!myLandbot) {
                var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
                s.addEventListener('load', function() {
                  myLandbot = new Landbot.Popup({
                    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1428921-JBZMJQ6BB1EWZ0G6/index.json',
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

      
    </div>
  )
}
