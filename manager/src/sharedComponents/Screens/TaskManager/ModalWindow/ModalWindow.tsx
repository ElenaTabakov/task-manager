import { ReactElement } from "react";
import Button from "../../../Button/Button";
import * as S from "./ModalWindow.styles";

interface ModalWindowProps {
  title: string;
  children: ReactElement | string;
  visible: boolean;
  onClose: () => void;
  //   closeModal: boolean;
}

const ModalWindow = ({
  title,
  children,
  visible = false,
  onClose,
}: ModalWindowProps) => {

  if (!visible) return null;

  return (
    <S.ModalWrapper >
      <S.OverlayBg />
      <S.ModalInner>
        <S.ModalContent>
          <S.ModalTitle>
            {title} <Button onClick={onClose}> x </Button>
          </S.ModalTitle>
          {children}
        </S.ModalContent>
      </S.ModalInner>
    </S.ModalWrapper>
  );
};

export default ModalWindow;
