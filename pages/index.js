import Head from 'next/head'
import { useState } from 'react'
import {MainComponent} from '../components/mainComponent'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [receips, setReceips] = useState([])
  // useEffect(() => {
  //   localStorage.setItem('recips',[])
  // }, [])
  

  return (
    <div className={styles.container}>
      <Head>
        <title>A recipes app</title>
      </Head>

      <main className={styles.main}>
       <MainComponent receips={receips} setReceips={setReceips}></MainComponent>
      </main>

      {/* <footer className={styles.footer}>
        
      </footer> */}
    </div>
  )
}
