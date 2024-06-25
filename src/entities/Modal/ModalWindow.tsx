import { Modal } from "antd";
import cls from "./ModalWindow.module.sass";
import { ModalStyles } from "./types";

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
  console.log('width', styles)
  return (
      <>
        {/* {isModalOpen && (
        <div style={{ position: "fixed", right: 0, top: 0 }}>CLOSE BUTTON</div>
      )} */}
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          className={cls.modalWindow}
          styles={styles}
          width={width}
          footer={null}
          // destroyOnClose
        >
          {children}
        </Modal>
      </>
  );
}

export default ModalWindow;
