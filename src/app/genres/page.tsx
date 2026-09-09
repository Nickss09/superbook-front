import Link from "next/link"
import "./page.css"

export default function GenresPage() {
    return (
        <main>
            <ul>
                <Link href='/genres/romance'><li>Romance</li></Link>
                <Link href='/genres/drama'><li>Drama</li></Link>
                <Link href='/genres/terror'><li>Terror</li></Link>
                <Link href='/genres/acao'><li>Ação</li></Link>
                <Link href='/genres/misterio'><li>Mistério</li></Link>
                <Link href='/genres/suspense'><li>Suspense</li></Link>
            </ul>
        </main>
    )
}