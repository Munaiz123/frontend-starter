import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  console.log('HOME')
  return (
    <main className={styles.main}>
      <h1>Hello, Home page!</h1>
    </main>
  )
}
