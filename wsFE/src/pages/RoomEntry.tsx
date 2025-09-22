import { useState } from "react"
import { Button } from "../ui/Button";
export const RoomEntry = () => {
    const [roomId,setRoomId]=useState();
    const [isCreate,setIsCreate]=useState(false);
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
        <div className="flex justify-center gap-4">
            <h2>Chat</h2>
            <div className="">
                <Button type="button"
                text="Join"
                variant={
                    !isCreate?"primary":"secondary"
                }
                size='md'
                onClick={()=>{setIsCreate(false)}}/>
                
                <Button type="button"
                text="Create"
                variant={
                    isCreate?"primary" :"secondary"
                }
                size='md'
                onClick={()=>{setIsCreate(true)}}
                />
            </div>
        </div>
    </div>
  )
}
