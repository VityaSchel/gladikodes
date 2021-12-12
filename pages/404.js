import Head from '../components/Head'
import styles from '../styles/404.module.scss'

export default function Error404() {
  return (
    <main className={styles.container}>
      <Head />
      <img src='/404' alt='404' />
      <h1>Страница не найдена</h1>
    </main>
  )
}
