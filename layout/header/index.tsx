import Link from 'next/link'

export default function Header() {
    return (
        <header>
        <ul>
            {/* kalo make a href dia akan merendering atau meload page */}
            {/* kalo make link bawaan dari next js itu mirip seperti single page application / client side navigation */}
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><a href="/users">Users</a></li>
        </ul>
        </header>
    )
}
