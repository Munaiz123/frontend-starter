import Image from 'next/image'
import styles from '../page.module.css'

async function getData(){
  
}

export default async function Home() {
  let data = await getData()

  return (
    <main className={styles.main}>
      <h1>Hello, About page!</h1>

    </main>
  )
}
