import { useState, type Provider, type ReactNode } from "react";
import { createContext } from "react";
type ContextType = {
  Token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

interface ProviderProps {
  children: ReactNode;
}
export const UserContext = createContext<ContextType | undefined>(undefined);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [Token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ Token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
