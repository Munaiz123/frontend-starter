import Image from 'next/image'
import styles from '../page.module.css'

async function getData(){

  const res = await fetch("https://e6fzx0p7md.execute-api.us-east-1.amazonaws.com/dev")

  if(!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

export default async function Home() {
  let data = await getData()

  console.log('DATA =>> ', data)

  return (
    <main className={styles.main}>
      <h1>Hello, About page!</h1>

    </main>
  )
}
