import { useContext } from "react";
import { ChannelContext } from "../context/context";

export const useChannelContext = () => {
  const context = useContext(ChannelContext);

  return context
};
