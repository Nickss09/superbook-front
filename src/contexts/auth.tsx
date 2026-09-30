"use client";

import { createContext, useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import { IAuthContext } from "../interfaces/IAuthContext";
import { IAuthenticatedUser } from "../interfaces/IAuthenticatedUser";
import { IAuthProvider } from "../interfaces/IAuthProvider";
import { jwtDecode } from "jwt-decode";
import { api } from "../http/api";
import Cookies from "js-cookie";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IAuthenticatedUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const router = useRouter();

  async function getUserData(
    userId: number,
  ): Promise<IAuthenticatedUser | undefined> {
    try {
      const { data: userData } = await api.get<IAuthenticatedUser>(
        `/users/${userId}`,
      );

      return userData;
    } catch (error) {
      console.log(error);
    }
  }

  async function loadData() {
    const user = Cookies.get("user");
    const token = Cookies.get("token");
    const isLogged = Cookies.get("isLogged");

    if (!user || !token || !isLogged) {
      signOut();
      return;
    }

    const userData = (await getUserData(
      JSON.parse(user),
    )) as IAuthenticatedUser;

    setCookies(userData, token);
    setUser(userData);
    setToken(token);
    setIsLogged(Boolean(isLogged));
  }

  function setCookies(userData: IAuthenticatedUser, accessToken: string) {
    Cookies.set("user", JSON.stringify(userData));
    Cookies.set("token", accessToken);
    Cookies.set("isLogged", "true");
  }

  function removeCookies() {
    Cookies.remove("user");
    Cookies.remove("token");
    Cookies.remove("isLogged");
  }

  async function signIn(accessToken: string) {
    const jwtToken = jwtDecode(accessToken);

    const userData = (await getUserData(
      Number(jwtToken.sub),
    )) as IAuthenticatedUser;

    setCookies(userData, accessToken);
    setUser(userData);
    setToken(token);
    setIsLogged(true);
  }

  function signOut() {
    removeCookies();
    setUser(null);
    setToken(null);
    setIsLogged(false);
    router.push("/");
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
