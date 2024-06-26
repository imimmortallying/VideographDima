import { ReactNode, useState } from "react";
import { ModalStyles } from "../Modal/types";

export function useModalWindowProps() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<null | ReactNode>(null);
  const [modalStyles, setModalStyles] = useState<ModalStyles>(); // чтобы убрать padding
  const [modalWidth, setModalWidth] = useState<string>(); // чтобы передать разную ширину в пропс. через styles передается некорректно

  const showModal = (
    modalContent: ReactNode,
    modalStyles?: ModalStyles,
    modalWidth?: string
  ) => {
    setIsModalOpen(true);
    setModalContent(modalContent);
    setModalStyles(modalStyles);
    setModalWidth(modalWidth);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return {
    modalProps: {
      handleCancel,
      handleOk,
      isModalOpen,
      modalContent,
      modalStyles,
      modalWidth,
    },
    showModal,
  };
}
