import { useState,useEffect,useRef } from "react";

export const App = () => {
  const [text, setText] = useState("");
  const [chatData,setChatData]=useState<string[]>([]);
  const [isSent,setisSent]=useState(false);

  const wsRef=useRef(null);

  useEffect(()=>{
     const ws=new WebSocket("ws://localhost:3000");
     ws.onmessage=(event)=>{
      setChatData(prev=>[...prev,event?.data])
     }
     wsRef.current=ws;
     ws.onopen=()=>{
      ws.send(JSON.stringify({
      type:"join",
      payload:{
        roomId:"1234"
      }
     }))
     }
     return ()=>ws.close;
  },[])

  const sendMessage=()=>{
    console.log("control here");
    //@ts-ignore
    wsRef.current.send(JSON.stringify({
      type:"chat",
      payload:{
        message:text
      }
    }))
    setText('');
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <div className="w-1/3 h-1/2 flex flex-col p-6 gap-5 border border-white rounded-xl">
        <div className="w-full h-4/5 overflow-auto flex flex-col gap-2 border-b border-white pb-2">
          {
            chatData.length>0&&
            chatData.map((message,index)=>(
              <div className="max-w-52 px-2 py-1 rounded-xl flex items-center text-white bg-gray-500"
              key={index}>
                {message}
              </div>
            ))
          }
        </div>
        <div className="flex gap-3 w-full items-center">
          <input
            className="bg-transparent w-full px-4 py-2 border border-white rounded-3xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Type a message"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="text-white text-md  px-6 py-2 rounded-3xl border border-white hover:bg-gray-200  hover:text-black transition-colors"
          onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
