import {useContext} from 'react';
import {Routes,Route,Navigate} from 'react-router-dom'
import {roomContext} from './Context/ContextProvider'
import { RoomEntry } from './pages/RoomEntry'
import {ChatPage} from './pages/ChatPage'

export const App = () => {
  const Context=useContext(roomContext);
  if(!Context){
    throw new Error("SomeComponent must be used within a ContextProvider");
  }
  const {roomId}=Context;
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/join'/>}/>
      <Route path={'/join'} element={roomId?<Navigate to='/chat'/>:<RoomEntry/>}/>
      <Route path='/chat' element={roomId?<ChatPage/>:<Navigate to='/join'/>}/>
    </Routes>
  )
}
