"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

import { api } from "@/src/http/api";

export default function Register() {

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const nome = (form.nome as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const senha = (form.senha as HTMLInputElement).value;

    try {
      const res = await api.post('/auth/register', { nome, email, senha });

      const data = res.data;

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

        <Image src="/logo.png" alt="logo" className="logo" width={170} height={170} />

        <h1>Criar <span>conta</span></h1>

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