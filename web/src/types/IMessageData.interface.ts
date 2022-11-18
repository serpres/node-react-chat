import { IUser } from "./IUser.interface";

export interface IMessageData {
  room: string;
  author: IUser;
  message: string;
  time: number;
  id: string;
}
