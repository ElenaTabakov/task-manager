import styled from "styled-components";
import { Input } from "@mantine/core";
import { device } from "../../../../styles/theme";

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
  padding: 1rem;
  box-sizing: border-box;
  flex: 0 0 55%;
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

export const SearchInput = styled(Input)`
  margin: 0 0 2rem;
`;

export const TasksHeader = styled.div`
  padding: 0 1rem;
  box-sizing: border-box;
`;
export const SideBarWrapper = styled.div`
  border-left: 1px solid ${({ theme }) => theme.toggleBorder};
  transition: ease-in-out 0.4s;
  flex: 0 0 45%;
  box-sizing: border-box;
  //padding-left: 1rem;
  @media (max-width: 768px) {
    border-left: 0;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
