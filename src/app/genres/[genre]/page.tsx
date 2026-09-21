'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import './page.css';

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  releaseDate: string;
  score: number;
}

const fallbackBooks: Book[] = [
  {
    id: 'romance-1',
    title: 'Amor & Gelato',
    author: 'Jenna Evans Welch',
    genre: 'romance',
    releaseDate: '',
    score: 5,
  },
  {
    id: 'romance-2',
    title: 'Amor & Gelato',
    author: 'Jenna Evans Welch',
    genre: 'romance',
    releaseDate: '',
    score: 5,
  },
  {
    id: 'romance-3',
    title: 'Amor & Gelato',
    author: 'Jenna Evans Welch',
    genre: 'romance',
    releaseDate: '',
    score: 5,
  },
];

function normalizeGenre(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value || 'romance';
}

export default function GenrePage() {
  const params = useParams<{ genre: string }>();
  const genre = normalizeGenre(params?.genre);
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let active = true;

    async function loadBooks() {
      try {
        const response = await fetch(`http://localhost:3333/books/${genre}`);
        if (!response.ok) throw new Error('Erro ao buscar livros');

        const data = await response.json();
        if (active && Array.isArray(data) && data.length > 0) {
          setBooks(data);
        } else if (active) {
          setBooks(genre.toLowerCase() === 'romance' ? fallbackBooks : []);
        }
      } catch {
        if (active) {
          setBooks(genre.toLowerCase() === 'romance' ? fallbackBooks : []);
        }
      }
    }

    loadBooks();
    return () => {
      active = false;
    };
  }, [genre]);

  const filteredBooks = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return books;
    return books.filter((book) =>
      `${book.title} ${book.author}`.toLowerCase().includes(term)
    );
  }, [books, search]);

  const title = genre.charAt(0).toUpperCase() + genre.slice(1);

  return (
    <main className="genre-page">
      <header className="genre-header">
        <Image
          src="/Logo.png"
          alt="Superbook"
          width={46}
          height={46}
          className="genre-logo"
        />

        <h1>{title}</h1>

        <button className="menu-button" type="button" aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </button>
      </header>

      <section className="genre-content">
        <div className="search-box">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="PESQUISE SEU LIVRO"
            aria-label="Pesquise seu livro"
          />
          <button type="button" aria-label="Pesquisar">
            🔍
          </button>
        </div>

        <div className="books-grid">
          {filteredBooks.map((book, index) => (
            <article className="book-card" key={`${book.id}-${index}`}>
              <div className="book-cover">
                <div className="cover-title">AMOR &amp; GELATO</div>
                <div className="cover-art" aria-hidden="true">
                  <span className="ice-cream ice-cream-left">🍦</span>
                  <span className="ice-cream ice-cream-right">🍦</span>
                </div>
                <div className="cover-author">Jenna Evans Welch</div>
              </div>

              <button className="review-button" type="button">
                Avaliações
              </button>
            </article>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <p className="empty-message">Nenhum livro encontrado.</p>
        )}
      </section>
    </main>
  );
}
