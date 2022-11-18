import * as io from "socket.io-client";
import { IMessageData } from "../../types/IMessageData.interface";
import { IUser } from "../../types/IUser.interface";

const socket = io.connect(
  process.env.REACT_APP_API_URL || "http://localhost:3001"
);

export const onReceiveMessage = (listener: (data: IMessageData) => void) => {
  socket.on("receive_message", listener);
  return () => socket.off("receive_message", listener);
};

export const onUserInit = (listener: (user: IUser) => void) => {
  socket.on("user_init", listener);
  return () => socket.off("user_init", listener);
};

export const emitSendMessage = async (data: IMessageData) => {
  await socket.emit("send_message", data);
};

export const emitJoinRoom = async (data: {
  username: string;
  room: string;
}) => {
  await socket.emit("join_room", data);
};
