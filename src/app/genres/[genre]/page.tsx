'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    releaseDate: Date;
    score: number;
}

export default function GenrePage() {
    const [books, setBooks] = useState<Book[]>([]);
    const { genre } = useParams<{ genre: string; }>();

    async function fetchBooksByGenre() {
        try {
            const books = await fetch(`http://localhost:3333/books/${genre}`)
                .then(response => response.json())
                .then(data => setBooks(data));

            console.log(books);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBooksByGenre();
    }, []);

    return (
        <main>
            <span>{genre}</span>

            {books && books.map(book => (
                <div key={book.id}>
                    <span>{book.title}</span>
                    <span>{book.author}</span>
                    <span>{book.genre}</span>
                    <span>{book.releaseDate.toString()}</span>
                    <span>{book.score}</span>
                </div>
            ))}
        </main>
    )
}