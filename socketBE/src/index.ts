import { WebSocketServer,WebSocket } from "ws";
import url from 'url';

const wss=new WebSocketServer({port:3000});
let userCount=0;

//roomId:string socket:WebSocket
let allSockets=new Map<string,WebSocket[]>();

wss.on('connection',(socket,req)=>{
    socket.on('error',console.error);

    const roomId=req?.url?.split('=')[1];
    if(!roomId){
        throw new Error("No room Id");
    }

    const roomSockets=allSockets.get(roomId)||[];
    roomSockets.push(socket);
    allSockets.set(roomId,roomSockets);

    socket.on('message',(e)=>{
        for(const [key,userSocket] of allSockets.entries()){
           if (userSocket.includes(socket)){
            userSocket.map(s=>s.send(e.toString()));
           }
        }
    })

    socket.on("disconnect",()=>{
        const roomSockets=allSockets.get(roomId)||[];
        roomSockets.filter(x=>x!=socket);
        allSockets.set(roomId,roomSockets);
    })
})
