import type { NextPage } from 'next';
import Layout from '../layout';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    // Di react basic mereturn sebuah component hanya bisa satu, jadi jika ingin mereturn 2 component perlu fragmen pembukus <> dan </>
    <Layout title="Home Page">
      <div style={{width: '100%', height: 300, position: 'relative'}}>
        {/* optimalisasi image dengan component bawaan next */}
        <Image src="/banner.jpg" alt="banner" layout='fill'
        objectFit='fill' />
      </div>
      <div>
        {/* tidak di optimalisasi */}
        <img src="/banner.jpg" style={{ width: '100%', height: 300, objectFit: 'fill' }} alt="banner" />
      </div>
      
      <h1 className={styles['title']}>Welcome Ridhliver</h1>
    </Layout>
  )
}

export default Home
