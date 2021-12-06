import { useRouter } from "next/router"
import { useEffect } from "react"

export default function NotFound() {
    // Membuat auto redirection after 2 second
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000)
    }, [])
    return (
        <div>
            <h1 className="title-not-found">Ooopsss..............</h1>
            <h1 className="title-not-found">Halaman tidak di temukan</h1>
        </div>
    )
}
