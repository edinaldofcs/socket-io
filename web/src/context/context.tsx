import React, { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface IUser {
  name: string;
  email: string;
} 

export interface IMessage {
  room: string;
  author: string;
  message: string;
  dataTime: string;
  email: string;
}

interface IChannelContext {
  messages: IMessage[];
  user: IUser | null;
  sendMessage: (message: IMessage) => void;
  login: (userName: string, email:string) => void;
  logOut: () => void;
  joinChannel: (channelId: string) => void;
}

export const ChannelContext = createContext({} as IChannelContext);

export const ChannelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const socket = useRef<Socket>();
  const [user, setUser] = useState<IUser | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    socket.current = io("http://localhost:5000");

    socket.current.on("refreshMessage", (data) => {
           
      setMessages((list) => [...list, data]);
    });
  }, []);

  const login = (name: string, email:string) => {
    setUser({ name: name, email: email});
    // joinChannel(`${user?.email}`)
  };

  const logOut = () => {
    setUser(null);
  };

  //ok
  const joinChannel = (channelId: string) => {
    socket.current?.emit("entrar", channelId);
  };

  const sendMessage = (message: IMessage) => {
    socket.current?.emit("sendMessage", message);
  };

  return (
    <ChannelContext.Provider
      value={{
        login,
        logOut,
        messages,
        sendMessage,
        joinChannel,
        user,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};
