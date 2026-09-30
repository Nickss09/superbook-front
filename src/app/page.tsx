"use client";

import { FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "../http/api";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const { signIn } = useAuth();
  const router = useRouter();

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const email = (form.email as HTMLInputElement).value;
    const password = (form.senha as HTMLInputElement).value;

    const loginData = { email, password };

    try {
      const { data } = await api.post("/auth/login", loginData);
      console.log(data);
      signIn(data.access_token);
      alert("Login efetuado com sucesso!");
      router.push("/genres");
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor");
    }
  }

  return (
    <main className="container">
      <div className="card">
        <Image
          src="/logo.png"
          alt="logo"
          width={170}
          height={170}
          className="logo"
        />

        <h1>
          Olá querido <span>superbooker!</span>
        </h1>

        <p>Seja bem-vindo de volta</p>

        <form className="form" onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" />
          <input name="senha" type="password" placeholder="Senha" />

          <button type="submit">Fazer login</button>
        </form>

        <p className="register">
          Não possui uma conta? <Link href="/register">Cadastre-se</Link>
        </p>
      </div>
    </main>
  );
}
