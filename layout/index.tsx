import Header from "./header"
import Footer from "./footer"
import { ReactNode } from "react"
import styles from './Layout.module.css'
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode,
    title: string
}
export default function Layout(props: LayoutProps) {
    const { children, title } = props;
    return (
        // membuat metadata
        <>
        <Head>
            <title>Next JS | {' '}{title}</title>
        </Head>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
        </div>
        </>
    )
}
