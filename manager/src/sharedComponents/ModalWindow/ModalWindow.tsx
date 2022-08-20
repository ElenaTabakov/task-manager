import { FormEvent, ReactElement, ReactEventHandler } from "react";
import Button from "../Button/Button";
import * as S from "./ModalWindow.styles";

interface ModalWindowProps {
  title: string;
  confirmBtnText: string;
  cancelBtnText: string;
  children: ReactElement | string;
  visible: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit:( ) => void ; 
  disabled: boolean;
}

const ModalWindow = ({
  title,
  children,
  visible = false,
  confirmBtnText,
  setIsShow,
  cancelBtnText,
  onSubmit,
  disabled
}: ModalWindowProps) => {

  if (!visible) return null;

  return (
    <S.ModalWrapper >
      <S.OverlayBg />
      <S.ModalInner>
        <S.ModalContent>
          <S.ModalTitle>
            {title} <Button onClick={() => setIsShow(false)}> x </Button>
          </S.ModalTitle>
          {children}
          <S.ModalFooter>
            <Button onClick={onSubmit} disabled={disabled}>{confirmBtnText}</Button> 
            <Button  onClick={() => setIsShow(false)}>{cancelBtnText}</Button>
        </S.ModalFooter>
        </S.ModalContent>
        
      </S.ModalInner>
    </S.ModalWrapper>
  );
};

export default ModalWindow;
