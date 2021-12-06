import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
        <ul className={styles.list}>
            {/* kalo make a href dia akan merendering atau meload page */}
            {/* kalo make link bawaan dari next js itu mirip seperti single page application / client side navigation */}
            <li className={styles.item}><Link href="/"><a>Home</a></Link></li>
            <li className={styles.item}><Link href="/blog"><a>Blog</a></Link></li>
            <li className={styles.item}><a href="/users">Users</a></li>
        </ul>
        </header>
    )
}
