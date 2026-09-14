import Link from "next/link"

import "./page.css"

export default function GenresPage() {
    return (
        <main>
            
            <h1>Gêneros Literários</h1>
            <ul>
                <Link href='/genres/romance'><li>Romance</li></Link>
                <Link href='/genres/fantasia'><li>Fantasia</li></Link>
                <Link href='/genres/misterio'><li>Mistério</li></Link>
                <Link href='/genres/suspense'><li>Suspense</li></Link>
                <Link href='/genres/terror'><li>Terror</li></Link>
                <Link href='/genres/aventura'><li>Aventura</li></Link>
                <Link href='/genres/drama'><li>Drama</li></Link>
            </ul>
        </main>
    )
}