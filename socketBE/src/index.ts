import { WebSocketServer, WebSocket } from "ws";
import url from "url";

const wss = new WebSocketServer({ port: 3000 });
let userCount = 0;

//roomId:string socket:WebSocket
let allSockets = new Map<string, WebSocket[]>();

type SocketMessage =
    { type: "join"; payload: { roomId: string } }
  | { type: "chat"; payload: { message: string } };

//prevents socket duplication in the single room
function checkSocket(socket:WebSocket,roomId:string){
    return allSockets.get(roomId)?.includes(socket);
}


wss.on("connection", (socket, req) => {
  socket.on("error", console.error);

  let currentRoomInfo: string | null = null;

  socket.on("message", (e) => {
    const message = e.toString();
    let messageInfo: SocketMessage;

    try {
      messageInfo = JSON.parse(message);
    } catch (err) {
      console.log("Not a Valid info", message);
      return;
    }

    if (messageInfo.type === "join") {
      const roomId = messageInfo.payload?.roomId;
      if (!roomId) {
        console.log("No room Id");
        return;
      }

      
      if(checkSocket(socket,roomId)){
        socket.send("You are already part of this room");
        return;
      }
      currentRoomInfo = roomId;
      const roomSockets = allSockets.get(roomId) || [];//Room with no users 
      roomSockets.push(socket);
      allSockets.set(roomId, roomSockets);

    } else if (messageInfo?.type === "chat") {

      if (!currentRoomInfo) {
        console.log("Not part of any room ");
        return;
      }

      const userRoom: WebSocket[] = allSockets.get(currentRoomInfo) || [];

      try {
        if (userRoom.includes(socket)) {
          userRoom.forEach(s => {
            s.send(messageInfo.payload?.message);
          });
        }
      } catch (err) {
        console.log(err);
        return;
      }
    }
  });

  //Remove all the dead sockets
  socket.on("close", () => {
    for (const [key, socketList] of allSockets.entries()) {
      if (socketList.includes(socket)) {
        const newSocketList = socketList.filter((s) => s !== socket);
        allSockets.set(key, newSocketList);
        return;
      }
    }
  });
});
