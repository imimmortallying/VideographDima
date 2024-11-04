import { Button, Form, Input, message } from "antd";
import cls from "./OrderForm.module.sass";
import { useState } from "react";

interface OrderFormProps {
  className?: string;
  title: string;
  description: string;
  positionClassName: string;
  positionGridBefore: string;
  positionGridAfter: string;
}

export const OrderForm = ({
  description,
  title,
  positionClassName,
  positionGridAfter,
  positionGridBefore
}: OrderFormProps) => {
  const [loading, setLoading] = useState(false); // Состояние для отслеживания загрузки

  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = async (values: any) => {
    setLoading(true); // Устанавливаем loading в true при отправке формы

    const formData = new FormData();
    formData.append("access_key", "084ccc49-975f-4db1-a9be-07838f1c4f0a");
    formData.append("nameInput", values.nameInput);
    formData.append("phoneNumber", values.phoneNumber);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      success();
      // Очистить значения формы после успешной отправки
    } else {
      console.log("Error", data);
    }

    setLoading(false); // Устанавливаем loading в false после выполнения запроса
  };

  const success = () => {
    messageApi.open({
      content: "Ваша заявка успешно отправлена",
      className: `${cls.message}`,
      style: {
        marginTop: "20vh",
        fontSize: "5rem",
      },
    });
  };

  return (
    <>
      {contextHolder}
      <div className={`${cls.orderForm_beforeCenter_bgc} ${positionGridBefore}`}></div>
      <div className={`${cls.orderForm_afterCenter_bgc} ${positionGridAfter}`}></div>
      <div className={`${cls.orderForm} ${positionClassName}`}>
        <Form onFinish={handleSubmit} className={cls.form}>
          <div className={cls.title}>{title}</div>
          <div className={cls.description}>{description}</div>
          <Form.Item
            name="nameInput"
            rules={[{ required: true, message: "Введите Ваше имя" }]}
          >
            <Input placeholder="Ваше имя" className={cls.input} />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Введите Ваш номер телефона" },
              {
                pattern: /^[0-9+-]+$/g,
                message: "Недопустимый формат телефона",
              },
            ]}
          >
            <Input placeholder="Номер телефона" className={cls.input} />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="default"
              className={cls.submit}
              loading={loading}
            >
              отправить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
