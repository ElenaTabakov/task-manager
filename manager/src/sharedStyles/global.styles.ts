import { Grid, ScrollArea } from "@mantine/core";
import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const ColBorder = styled(Grid.Col)`
  border-right: 1px solid ${({ theme }) => theme.toggleBorder};
`;

export const TasksWrapper = styled(ScrollArea)`
  height: calc(100vh - 18rem);
  width: 97%;
  padding-right: 2rem;
  & .mantine-ScrollArea-thumb {
    background: ${({ theme }) => theme.background};
  }
  box-sizing: border-box;
  @media (max-width:768px){
    width: 100%;
    padding: 0;
    }
`;
