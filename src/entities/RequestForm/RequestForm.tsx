
import { Button, Form, Input, Radio } from "antd";
import cls from "./RequestForm.module.sass"
import GifHeader from "../../assets/modalHeader.gif";

interface RequestFormProps {
    className?: string;
}

export const RequestForm = ({className}:RequestFormProps) => {
    return (
        <Form onFinish={(values) => console.log(values)} className={cls.form}>
        <img src={GifHeader} alt="" className={cls.header_gif}/>
        <div className={cls.title}>консультация по съемке</div>
        <div className={cls.title_small}>
          Мы перезвоним вам, подробно проконсультируем и предложим варианты
          съемок
        </div>
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
            { pattern: /^[0-9+-]+$/g, message: "Недопустимый формат телефона" },
          ]}
        >
          <Input placeholder="Номер телефона" className={cls.input} />
        </Form.Item>

        <div className={cls.title_left}>Удобный способ связи:</div>
        <Form.Item
          name="wayOfConnectionRadio"
          rules={[{ required: true, message: "Выберите как с Вами связаться" }]}
        >
          <Radio.Group className={cls.radio_group}>
            <Radio value="Call">Звонок</Radio>
            <Radio value="Telegram">Telegram</Radio>
            <Radio value="WhatsApp">WhatsApp</Radio>
            <Radio value="Instagram">Instagram</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={cls.button_submit}
            block
          >
            Отправить
          </Button>
        </Form.Item>
      </Form>
    );
};