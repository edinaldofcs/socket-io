import { ChatContent, ChatIcon } from "./styles";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { FaWindowMinimize } from "react-icons/fa";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useChannelContext } from "../../hooks/UseChannelContext";
import Message from "../message";

export default function Chat() {
  const { user, messages, joinChannel, sendMessage } = useChannelContext();
  const [show, setShow] = useState<boolean>(false);
  const [animation, setAnimation] = useState("");
  const [text, setText] = useState("");
  const message = {
    room: "xxxx",
    author: "Suporte",
    message: "Olá, em que posso te ajudar?",
    dataTime: "08/09/2022 20:23:52",
    email: "suporte@chatbox.com",
  };

  const divRef = useRef<HTMLDivElement>(null);

  const goToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    console.log("teste2");
    goToBottom();
  }, [messages]);

  useEffect(() => {
    if (!user) {
      return;
    }
    joinChannel(user.email);
  }, []);

  function handleSubmitForm(e: FormEvent) {
    e.preventDefault();
    if (text === "") return;
    sendMessage({
      room: `${user?.email}`,
      author: `${user?.name}`,
      message: text,
      dataTime: `${new Date()}`,
      email: `${user?.email}`,
    });
    setText("");
  }

  return (
    <>
      {!show ? (
        <ChatIcon
          onClick={() => {
            setAnimation("");
            setShow(true);
          }}
        >
          <span>Fale conosco</span>
          <BsFillChatRightDotsFill />
        </ChatIcon>
      ) : (
        <ChatContent className={animation} onSubmit={handleSubmitForm}>
          <div ref={divRef}>
            <div className="others">
              <p>{message.author}</p>
              <p>{message.message}</p>
              <span>{message.dataTime}</span>
            </div>
            {messages.map((msg) => (
              <Message
                author={msg.author}
                data={msg.dataTime}
                email={msg.email}
                key={`${msg.dataTime} ${Math.random()}`}
                message={msg.message}
              />
            ))}
          </div>
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </div>
          <FaWindowMinimize
            onClick={() => {
              setAnimation("animar");
              setTimeout(() => {
                setShow(false);
              }, 400);
            }}
          />
        </ChatContent>
      )}
    </>
  );
}
