import { Request, Response } from "express";
import Room from "@src/models/Room";


export default class RoomController {  

  static async createRoom(room: string, socket: any) {    
    const roomExit = await Room.findOne({
      where: {
        room: room,
      },
      raw: true,
    });

    if(roomExit)return
    if(!room) return
    
    try {
      await Room.create({room: room});
      return socket.join(room)

    } catch (error) {      
      return
    }
  }  
  
  static async listRooms(req: Request, res: Response){
    const rooms = await Room.findAll()

    return res.status(200).json(rooms) 
  }
}
