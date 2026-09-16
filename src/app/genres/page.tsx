import Link from "next/link"
import Image from "next/image"
import "./page.css"

export default function GenresPage() {
    return (
        <>
        <head>
            <title>Gêneros Literários</title>
        </head>
        <main>

            <h1>Gêneros <span>Literários</span></h1>
            <ul>
                <Link href='/genres/romance'><li className="romance">Romance</li></Link>
                <Link href='/genres/fantasia'><li className="fantasia">Fantasia</li></Link>
                <Link href='/genres/misterio'><li className="misterio">Misterio</li></Link>
                <Link href='/genres/suspense'><li className="suspense">Suspense</li></Link>
                <Link href='/genres/terror'><li className="terror">Terror</li></Link>
                <Link href='/genres/aventura'><li className="aventura">Aventura</li></Link>
                <Link href='/genres/drama'><li className="drama">Drama</li></Link>
            </ul>
        </main>
        </>
    )
}