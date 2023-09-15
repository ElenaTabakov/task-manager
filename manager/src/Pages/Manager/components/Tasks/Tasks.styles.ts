import styled from "styled-components";
import { Input } from "@mantine/core";

export const TasksContainer = styled.div`
  margin: 2rem auto;
  max-width: 100%;
`;

export const ListWrapper = styled.section`
  margin: 1rem auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const ListUl = styled.ul`
  list-style: none;
  max-width: 55%;
  padding: 0 1.8rem 1rem 0;
  box-sizing: border-box;
  flex: 0 0 55%;
  margin-block-start: 0;
  height: calc(100vh - 18rem);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
 &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
&::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.mint};
}

&::-webkit-scrollbar-thumb:hover {
  background:${({theme}) => theme.background};
}
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const LoadingOverlayWrapper = styled.div`
  position: absolute;
  top: 6vh;
  left: 48%;
  z-index: 2;
  /* width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center; */
`;

export const SideBarWrapper = styled.div`
  /* border-left: 1px solid ${({ theme }) => theme.toggleBorder}; */
  background: ${({theme}) => theme.lightGray};
  transition: ease-in-out 0.4s;
  flex: 0 0 45%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    border-left: 0;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
