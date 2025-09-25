import { useState, type Provider, type ReactNode } from "react";
import { createContext } from "react";
import type{ 
  TokenType,
  BrainDataType,
  CardProps 
} from "../types/content";



interface ProviderProps {
  children: ReactNode;
}
export const DataContext=createContext<BrainDataType|undefined>(undefined);
export const UserContext = createContext<TokenType | undefined>(undefined);

export const ContextProvider = ({ children }: ProviderProps) => {
  const [Token, setToken] = useState("");
  const [Data,setData]=useState<CardProps[]>([]);
  return (
    <UserContext.Provider value={{ Token, setToken }}>
      <DataContext.Provider value={{Data,setData}}>
      {children}
      </DataContext.Provider>
    </UserContext.Provider>
  );
};
