import type { NextPage } from 'next'
import Header from '../layout/header'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    // Di react basic mereturn sebuah component hanya bisa satu, jadi jika ingin mereturn 2 component perlu fragmen pembukus <> dan </>
    <>
      <Header />
      {/* styling from Home.module.css */}
      <h1 className={styles['title']}>Welcome Ridhliver</h1>
    </>
  )
}

export default Home
