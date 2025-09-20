import { Children, useContext,useState } from "react";
import { createContext } from "react";
type ContextType={
        Token:string;
        setToken:React.Dispatch<React.SetStateAction<string>>
};

export const UserContext=createContext<ContextType|undefined>(undefined);

export const ContextProvider = () => {
    const [Token,setToken]=useState('');
  return (
    <ContextProvider.Provider value={[Token,setToken]}>
        {Children}
    </ContextProvider.Provider>
  )
}
