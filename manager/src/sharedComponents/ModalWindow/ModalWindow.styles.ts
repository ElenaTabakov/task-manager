import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
`;

export const OverlayBg = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ModalInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContent = styled.div`
  background: ${({ theme }) => (lightTheme ? theme.body : theme.background)};
  border-radius: 12px;
  min-height: 200px;
  width: 700px;
  overflow: hidden;
`;

export const ModalTitle = styled.div`
  width: 100%;
  color: #000;
  background: lightcyan;
  font-size: 1.7em;
  padding: 10px;
  font-weight: bold;
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.purple};
  background: ${({ theme }) => theme.lightGray};
  padding: 0 1em;
`;

export const ModalFooter = styled.div`
  padding: 15px;
  border-top: 1px solid #c1c1c1;
  background: ${({ theme }) => theme.lightGray};
  padding: 0 1em;
  & .add_btn {
    background: ${({ theme }) => theme.mint};
    color: ${({theme}) => theme.text};

    &:disabled{
      opacity: 0.5;
    }
  }
`;
