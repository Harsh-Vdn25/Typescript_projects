import { WebSocketServer,WebSocket } from "ws";
import url from 'url';

const wss=new WebSocketServer({port:3000});
let userCount=0;

//roomId:string socket:WebSocket
let allSockets=new Map<string,WebSocket[]>();

interface messageType{
    type:string;
    message:string;
}

wss.on('connection',(socket,req)=>{
    socket.on('error',console.error);

    const roomId=req?.url?.split('=')[1]||'';
    if(!roomId){
        throw new Error("No room Id");
    }

    const roomSockets=allSockets.get(roomId)||[];
    roomSockets.push(socket);
    allSockets.set(roomId,roomSockets);

    socket.on('message',(e)=>{
        const message=e.toString();
        let messageInfo:messageType;
        try{
            messageInfo=JSON.parse(message);
        }catch(err){
            console.log("Not a Valid info",message);
            return;
        }
        if(messageInfo?.type==='chat'){
            for(const [key,userSocket] of allSockets.entries()){
           if (userSocket.includes(socket)){
            userSocket.map(s=>s.send(messageInfo.message));
           }
        }
        }
    })
    //Remove all the dead sockets 
    socket.on("close",()=>{
        const roomSockets=(allSockets.get(roomId)||[]).filter(x=>x!=socket);
        allSockets.set(roomId,roomSockets);
    })
})
