import { useChannelContext } from "../../hooks/UseChannelContext";
import { MsgContainer } from "./styles";

interface MsgProps {
  email: string;
  data: string;
  author: string;
  message: string;
}

export default function Message({ email, data, author, message }: MsgProps) {
  const { user } = useChannelContext()
  return (
    <MsgContainer
      className={user?.email === email ? "me" : ""}      
    >
      <p>{author}</p>
      <p>{message}</p>
      <span>{`${new Date(data).toLocaleDateString()} - ${new Date(
        data
      ).toLocaleTimeString()}`}</span>
    </MsgContainer>
  );
}
