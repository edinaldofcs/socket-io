import type { NextPage } from "next";
import { useState } from "react";
import Message from "../../components/message";
import { useChannelContext } from "../../hooks/UseChannelContext";
import { SuportContext } from "./styles";

interface RoomsProps {
  rooms: {
    room: string;
  }[];
}

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:5000/rooms")
  // const rooms = await res.json()
  const rooms = [{ room: "room 01" }, { room: "room 02" }];
  return {
    props: { rooms }, // will be passed to the page component as props
  };
}

const Suport: NextPage<RoomsProps> = ({ rooms }) => {
  const [messages, setMessages] = useState<any>([]);
  const { user } = useChannelContext();

  async function handleGetMessage(room: string) {
    setMessages([
      {
        id: 1,
        room: "edinaldofcs@gmail.com",
        email: "edinaldofcs@gmail.com",
        author: "edinaldo",
        message: "oi Nlado",
        dataTime: "2022-09-27T23:26:37.386Z",
        createdAt: "2022-09-27T23:26:37.389Z",
        updatedAt: "2022-09-27T23:26:37.389Z",
      },
      {
        id: 2,
        room: "edinaldofcs@gmail.com",
        email: "edinaldofcs@gmail.com",
        author: "edinaldo",
        message: "oifsdfdsf",
        dataTime: "2022-09-27T23:26:43.793Z",
        createdAt: "2022-09-27T23:26:43.793Z",
        updatedAt: "2022-09-27T23:26:43.793Z",
      },
      {
        id: 3,
        room: "edinaldofcs@gmail.com",
        email: "email@email.comss",
        author: "Edinaldofcsss",
        message: "Tudo bem?",
        dataTime: "2022-09-27T23:26:48.121Z",
        createdAt: "2022-09-27T23:26:48.121Z",
        updatedAt: "2022-09-27T23:26:48.121Z",
      },
      {
        id: 4,
        room: "edinaldofcs@gmail.com",
        email: "edinaldofcs@gmail.com",
        author: "edinaldo",
        message: "ola",
        dataTime: "2022-09-27T23:32:29.171Z",
        createdAt: "2022-09-27T23:32:29.172Z",
        updatedAt: "2022-09-27T23:32:29.172Z",
      },
    ]);
  }

  return (
    <SuportContext>
      <div>
        {rooms.map((room) => (
          <button onClick={() => handleGetMessage(room.room)}>
            {room.room}
          </button>
        ))}
      </div>
      <main>
        <div>Nome</div>
        <div>
          {messages &&
            messages.map((msg: any) => (
              <Message
                author={msg.author}
                data={msg.dataTime}
                email={msg.email}
                key={`${msg.dataTime} ${Math.random()}`}
                message={msg.message}
              />
            ))}
        </div>
        <form>
          <input type="text" placeholder="Digite a sua mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </main>
    </SuportContext>
  );
};

export default Suport;
