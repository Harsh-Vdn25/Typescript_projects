import { Children, createContext,useState, type ReactNode, type SetStateAction } from "react"

export interface ContextType{
    roomId:string;
    setRoomId:React.Dispatch<SetStateAction<string>>
}

interface ProviderProps{
    children:ReactNode
}

const roomContext=createContext<ContextType|undefined>(undefined);


export const ContextProvider = ({children}:ProviderProps) => {
    const [roomId,setRoomId]=useState('');
  return (
    <roomContext.Provider value={{roomId,setRoomId}}>
        {children}
    </roomContext.Provider>
    )
}
