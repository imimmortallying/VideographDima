import { Modal } from "antd";
import cls from "./ModalWindow.module.sass";
import { ModalStyles } from "./types";

interface ModalWindowProps {
  isModalOpen: boolean | undefined;
  handleOk: () => void;
  handleCancel: () => void;
  children: React.ReactNode;
  // width: string;
  styles: ModalStyles | undefined;
}

function ModalWindow({
  handleCancel,
  handleOk,
  isModalOpen,
  children,
  // width,
  // styles,
}: ModalWindowProps) {
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
          // styles={{ body: { padding: 0, width: "100%"}, content:{padding: 0, width: "100%"} }}
          // styles={styles}
          // width={'100vw'}
          // height={"100%"}
          footer={null}
          // destroyOnClose
        >
          {children}
        </Modal>
      </>
  );
}

export default ModalWindow;
