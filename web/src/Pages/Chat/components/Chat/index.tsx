import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Empty } from "antd";

import {
  emitSendMessage,
  onReceiveMessage,
} from "../../../../core/api/socket.api";

import ChatMessage from "../Message";
import ChatInputForm from "../InputForm";

import { useChatContext } from "../../../../core/hooks/useChatContext";

import { IMessageData } from "../../../../types/IMessageData.interface";
import { SChat } from "./styles";

const Chat = () => {
  const [messages, setMessages] = useState<IMessageData[]>([]);

  const { state: chatState } = useChatContext();

  useEffect(() => {
    const cleanReceiveListener = onReceiveMessage((data) =>
      setMessages((prev) => [...prev, data])
    );
    return () => {
      cleanReceiveListener();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSendMessage = (message: string) => {
    const messageData = {
      room: chatState!.room,
      author: chatState!.user,
      time: Date.now(),
      message,
      id: uuidv4(),
    };
    emitSendMessage(messageData);
    setMessages((prev) => [...prev, messageData]);
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

  return (
    <SChat>
      <div className="message__container">
        {messages?.map((message) => (
          <ChatMessage key={message.id} data={message} />
        ))}
        <div ref={messagesEndRef} />
        {messages.length === 0 && (
          <div className="message__empty">
            <Empty
              description={<div style={{ color: "#ccc" }}>Сообщений нет</div>}
            />
          </div>
        )}
      </div>
      <div className="input-message__wrapper">
        <ChatInputForm onSend={onSendMessage} />
      </div>
    </SChat>
  );
};

export default Chat;
