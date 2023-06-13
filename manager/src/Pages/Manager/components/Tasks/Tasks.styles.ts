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
`;

export const ListUl = styled.ul`
  list-style: none;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export const LoadingOverlayWrapper = styled.div`
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
