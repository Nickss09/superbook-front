"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Register() {

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const nome = (form.nome as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const senha = (form.senha as HTMLInputElement).value;

    try {
      const res = await fetch("http://localhost:3001/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, senha }),
      });

      const data = await res.json();

      if (data.message === "Cadastro sucesso") {
        alert("Conta criada!");
      } else {
        alert("Erro ao cadastrar");
      }

    } catch (error) {
      console.error(error);
      alert("Erro no servidor");
    }
  }

  return (
    <main className="container">
      <div className="card">

        <Image src="/logo.png" alt="logo" width={100} height={100} className="logo" />

        <h1>Criar conta</h1>

        <p>Preencha os dados abaixo</p>

        <form className="form" onSubmit={handleRegister}>
          <input name="nome" type="text" placeholder="Nome" />
          <input name="email" type="email" placeholder="Email" />
          <input name="senha" type="password" placeholder="Senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="register">
          Já possui conta?{" "}
          <Link href="/">Fazer login</Link>
        </p>

      </div>
    </main>
  );
}