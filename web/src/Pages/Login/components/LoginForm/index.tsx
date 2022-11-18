import React, { useEffect } from "react";

import { Button, Form, Input } from "antd";
import { SCard } from "./styles";
import { LoginOutlined } from "@ant-design/icons";
import { emitJoinRoom, onUserInit } from "../../../../core/api/socket.api";
import { useNavigate } from "react-router-dom";
import { useChatContext } from "../../../../core/hooks/useChatContext";

interface IFormValues {
  username: string;
  room: string;
}

const ChatLoginForm = () => {
  const { setRoom, setUser } = useChatContext();
  const navigate = useNavigate();

  const onFinish = async (values: IFormValues) => {
    emitJoinRoom(values);
    onUserInit((data) => setUser!(data));
    setRoom!(values.room);
  };

  useEffect(() => {
    const cleanUserInitListener = onUserInit((data) => {
      setUser!(data);
      navigate("/chat");
      return () => cleanUserInitListener();
    });
  }, []);

  return (
    <SCard>
      <Form
        initialValues={{ room: 1 }}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          label="Имя"
          name="username"
          rules={[{ required: true, message: "Необходимо ввести имя" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ID комнаты"
          name="room"
          tooltip="id чат комнаты. 1 - общая комната"
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            shape="round"
            icon={<LoginOutlined />}
            type="primary"
            htmlType="submit"
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </SCard>
  );
};

export default ChatLoginForm;
