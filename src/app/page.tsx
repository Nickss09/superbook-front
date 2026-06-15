'use client';

import { FormEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const email = (form.email as HTMLInputElement).value;
    const senha = (form.senha as HTMLInputElement).value;

    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (data.message === 'Login sucesso') {
        alert('Login feito!');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o servidor');
    }
  }

  return (
    <main className='container'>
      <div className='card'>
        <Image
          src='/Logo.png.png'
          alt='logo'
          width={250}
          height={250}
          className='logo'
        />

        <h1>
          Olá querido <span>superbooker!</span>
        </h1>

        <p>Seja bem-vindo de volta</p>

        <form className='form' onSubmit={handleLogin}>
          <input name='email' type='email' placeholder='Email' />
          <input name='senha' type='password' placeholder='Senha' />

          <button type='submit'>Fazer login</button>
        </form>

        <p className='register'>
          Não possui uma conta? <Link href='/register'>Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}
