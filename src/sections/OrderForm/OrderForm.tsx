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
  className,
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
    try {
      // Ваша логика для отправки данных
      console.log("Form values:", values);
      // Имитация запроса на сервер с задержкой (можете заменить на реальный запрос)
      await new Promise((resolve) => setTimeout(resolve, 500));
      success();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false); // В любом случае сбрасываем loading обратно в false
    }
  };

  const success = () => {
    messageApi.open({
      //   type: "success",
      content: "Ваша заявка успешно отправлена",
      className: `${cls.message}`,
      //   icon: <div style={{ color: '#108ee9' }}>123</div>, // тут можно кастомизировать иконку. но как увеличить
      // стандартную иконку type: "success" не понял. Мб в токене в app
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
        <Form onFinish={(values) => handleSubmit(values)} className={cls.form}>
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
              отпправить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
