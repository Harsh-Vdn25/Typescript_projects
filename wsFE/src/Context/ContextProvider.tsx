import { Children, createContext,useState,useRef, type ReactNode, type SetStateAction, type RefObject } from "react"

export interface ContextType{
    roomId:string;
    setRoomId:React.Dispatch<SetStateAction<string|''>>;
    socketRef:RefObject<WebSocket|null>;
}

interface ProviderProps{
    children:ReactNode
}

export const roomContext=createContext<ContextType|undefined>(undefined);


export const ContextProvider = ({children}:ProviderProps) => {
    const [roomId,setRoomId]=useState('');
    const socketRef=useRef(null);
  return (
    <roomContext.Provider value={{roomId,setRoomId,socketRef}}>
        {children}
    </roomContext.Provider>
    )
}
