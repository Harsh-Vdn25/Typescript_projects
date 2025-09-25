import { roomContext, type ContextType } from "../Context/ContextProvider";
import { useContext, useState } from "react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

export const RoomEntry = () => {
  const [userRoomId, setuserRoomId] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const navigate = useNavigate();
  const context = useContext(roomContext);

  if (!context) {
    throw new Error("");
  }

  const { setRoomId, socketRef } = context;

  const handleSubmit = () => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket("ws://localhost:3000");
    }

    if (isCreate) {
      socketRef.current.onopen = (event) => {
        socketRef.current.send(
          JSON.stringify({
            type: "create",
          })
        );

        socketRef.current.onmessage = (event) => {
          const roomInfo: string = event?.data;
          const roomId = JSON.parse(roomInfo).roomId;
          if (!roomId) {
            console.log("Try again");
            return;
          }
          setRoomId(roomId);
          navigate("/chat");
        };
      };
    } else {
      if (userRoomId.length === 0) {
        alert("please enter the room Id");
        return;
      }
      socketRef.current.onopen = (event: {
        currentTarget: { readyState: number };
      }) => {
        try {
          socketRef.current.send(
            JSON.stringify({
              type: "join",
              payload: {
                roomId: userRoomId,
              },
            })
          );
          socketRef.current.onmessage = (e) => {
            const data = JSON.parse(e?.data);

            if (data?.type === "error") {
              alert(data?.message);
              return;
            }
            setRoomId(userRoomId);
            navigate("/chat");
          };
        } catch (err) {
          console.log("Failed to Join", err);
          return;
        }
        // socketRef.current?.onerror = (error) => {
        //   console.error(error);
        // };
      };
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="flex flex-col p-8 items-center bg-white gap-6 rounded-2xl shadow-2xl w-[350px]">
        <h2 className="text-3xl font-bold text-gray-800">Chat Room</h2>
        <p className="text-gray-500 text-sm">
          Join an existing room or create a new one
        </p>

        <div className="flex w-full gap-2">
          <Button
            type="button"
            text="Join"
            variant={!isCreate ? "primary" : "secondary"}
            size="sm"
            className="flex-1"
            onClick={() => setIsCreate(false)}
          />
          <Button
            type="button"
            text="Create"
            variant={isCreate ? "primary" : "secondary"}
            size="sm"
            className="flex-1"
            onClick={() => setIsCreate(true)}
          />
        </div>

        <div className="flex flex-col w-full gap-3">
          {!isCreate ? (
            <input
              className="w-full bg-gray-100 px-4 py-2 rounded-lg border border-gray-300  focus:outline-none"
              placeholder="Enter the room ID"
              value={userRoomId}
              onChange={(e) => setuserRoomId(e.target.value)}
            />
          ) : (
            <p className="text-gray-600 text-center">
              We’ll generate a unique room for you
            </p>
          )}

          <Button
            type="submit"
            text={isCreate ? "Create Room" : "Join Room"}
            variant="primary"
            size="md"
            className="w-full"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};
