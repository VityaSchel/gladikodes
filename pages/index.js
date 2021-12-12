import Head from '../components/Head'
import styles from '../styles/Home.module.scss'
import statuses from '../lib/statuses'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <div className={styles.info}>
          <h1 className={styles.title}>HTTP-Гладикоды</h1>
          <h3>Использование:</h3>
          <pre className={styles.pre}>https://gladikodes.utidteam.com/[statusCode]</pre>
          <p><strong>Примечание:</strong> Если вам нужно расширение на конце URL, просто добавьте <code>.png</code></p>
        </div>

        <div className={styles.grid}>
          {Object.entries(statuses).map(([code, message]) =>
            <a href={`/${code}`} key={code} target='_blank' rel='noopener noreferrer'>
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
        <a href='https://github.com/VityaSchel/gladikodes' target='_blank' rel='noopener noreferrer'>
          <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="currentColor"></path></svg>
        </a>
      </footer>
    </div>
  )
}
