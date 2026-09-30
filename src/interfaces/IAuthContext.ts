import { IAuthenticatedUser } from "./IAuthenticatedUser";

export interface IAuthContext {
  user: IAuthenticatedUser | null;
  token: string | null;
  isLogged: boolean;
  signIn: (accessToken: string) => void;
  signOut: () => void;
}
