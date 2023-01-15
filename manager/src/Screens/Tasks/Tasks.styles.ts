import styled, { css } from "styled-components";

export const TasksContainer = styled.div`
  margin: 35px auto;
  max-width: 500px;
`;

export const ListWrapper = styled.section`
  margin: 15px auto;
  width: 100%;
`;

export const ListUl = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const LoadingOverlayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: rgba(255,255,255,0.1); */
`;
