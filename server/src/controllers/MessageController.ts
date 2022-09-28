import Message from "@src/models/Message";
import { Request, Response } from "express";
import { io } from "../..";

interface BodyProps {
  author: string;
  message: string;
  email: string;
  dataTime: Date;
  room: string;
}

export default class MessageController {
  static async createMessageOnSocket(msg: BodyProps) { 
    const message = await Message.Message.create(msg);    
    io.to(msg.room).emit('refreshMessage', message)  
    return  message
  }

  static async createMessage(req: Request, res: Response) {
    const { id: room } = req.params;
    const body: BodyProps = req.body;
    const dataTime = new Date(Date.now())
    const message = {
      ...body,
      room,
      dataTime
    };

    try {
      const msg = await MessageController.createMessageOnSocket(message); 
      return res.status(201).json(msg);
    } catch (error) {
      return res.status(401).json({ error: error });
    }
  }

  static async listMessages(req: Request, res: Response) {
    const { data } = req.query;
    const { room } = req.params;

    try {
      const messages = await Message.Message.findAll({ where: { room: room } });
      const dateFiltered = messages.filter((message: any) => {
        return (
          new Date(message.createdAt) > new Date(`${data}`)
        );
      });
      return res.status(200).json(dateFiltered);
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }

  static async listMessagesSuport(req: Request, res: Response) {
    try {
      const messages = await Message.Message.findAll();
      return res.status(200).json(messages);
    } catch (error) {
      return res.status(404).json({ error: error });
    }
  }
}
