import React, { FC } from "react";

import { useChatContext } from "../../../../core/hooks/useChatContext";
import { SMessage } from "./styles";
import { IMessageData } from "../../../../types/IMessageData.interface";
import moment from "moment";

interface IProps {
  data: IMessageData;
}

const ChatMessage: FC<IProps> = ({ data }) => {
  const { state } = useChatContext();
  const from = state?.user.id === data.author.id ? "from-me" : "from-them";
  return (
    <SMessage>
      <p className={`message-body ${from}`}>{data.message}</p>
      <p className={`message-meta${from === "from-me" ? " my-meta" : ""}`}>
        {moment(data.time).format("LLL")} от {data.author.username}
      </p>
    </SMessage>
  );
};

export default ChatMessage;
