import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import statuses from '../lib/statuses'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HTTP-Гладикоды</title>
        <meta name='description' content='Коды статусов HTTP в картинках Глада Валакаса' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.info}>
          <h1 className={styles.title}>HTTP-Гладикоды</h1>
          <h3>Использование:</h3>
          <pre className={styles.pre}>https://gladikodes.utidteam.com/[statusCode]</pre>
          <p><strong>Примечание:</strong> Если вам нужно расширение на конце URL, просто добавьте <code>.png</code></p>
        </div>

        <div className={styles.grid}>
          {Object.entries(statuses).map(([code, message]) =>
            <a href={`/${code}`} key={code}>
              <div className={styles.card}>
                <img src={`/uploads/${code}.png`} alt={`Код ${code}`} id={styles[`code${code}`]} />
                <div className={styles.info}>
                  <span className={styles.code}>
                    {code}
                  </span>
                  <span className={styles.message}>
                    {message}
                  </span>
                </div>
              </div>
            </a>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://hloth.dev' target='_blank' rel='noopener noreferrer'>
          от разработчика сайта с гадзами и абобой / by hloth
        </a>
      </footer>
    </div>
  )
}
