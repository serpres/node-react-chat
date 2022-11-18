import React, { FC } from "react";

import { Button, Form, Input } from "antd";
import { ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";
import { useChatContext } from "../../../../core/hooks/useChatContext";

interface IProps {
  onSend: (message: string) => void;
}

const ChatInputForm: FC<IProps> = ({ onSend }) => {
  const [form] = Form.useForm();

  const { setRoom } = useChatContext();
  const exitRoom = () => setRoom!("");

  return (
    <Form
      form={form}
      className="chat-input-form"
      name="basic"
      onFinish={({ message }: { message: string }) => {
        if (message !== "") {
          onSend(message);
          form.resetFields();
        }
      }}
    >
      <Form.Item name="message">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button onClick={exitRoom} icon={<ArrowLeftOutlined />} type="dashed">
          Сменить команату
        </Button>

        <Button
          style={{ float: "right" }}
          icon={<SendOutlined />}
          type="primary"
          htmlType="submit"
        >
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ChatInputForm;
