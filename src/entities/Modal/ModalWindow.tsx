import { Modal } from "antd";
import cls from "./ModalWindow.module.sass";
import { ModalStyles } from "./types";
import { CloseOutlined } from "@ant-design/icons";

interface ModalWindowProps {
  isModalOpen: boolean | undefined;
  handleOk: () => void;
  handleCancel: () => void;
  children: React.ReactNode;
  width?: string;
  styles: ModalStyles | undefined;
}

function ModalWindow({
  handleCancel,
  handleOk,
  isModalOpen,
  children,
  width,
  styles,
}: ModalWindowProps) {
  return (
    <>
      {isModalOpen && (
        // <div style={{ position: "fixed", right: 0, top: 0, color: 'red', fontSize: '5rem', zIndex: 1}}>CLOSE BUTTON</div>
        <CloseOutlined style={{ position: "fixed", right: '5rem', top: '5rem', color: 'white', fontSize: '5rem', zIndex: 1}}/>
      )}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={cls.modalWindow}
        styles={styles}
        width={width}
        footer={null}
        closable={false}
        // destroyOnClose
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalWindow;
