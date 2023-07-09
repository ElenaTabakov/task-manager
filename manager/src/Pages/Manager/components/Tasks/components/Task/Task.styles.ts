import { autoBatchEnhancer } from "@reduxjs/toolkit";
import { IconScale } from "@tabler/icons";
import styled, { css } from "styled-components";
import { CircleTitle } from "../../../../../../sharedComponents/CircleTitle/CircleTitle.styles";

export const ListWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin: 0 0 15px;
`;
export const DateListWrapper = styled.div`
  flex: 0 0 80px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 500;
`;
export const ListItem = styled.div<{ activeTask: boolean; status: string }>`
  display: flex;
  flex: 1;
  align-items: flex-start;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  transform: ${({ activeTask }) => (activeTask ? "scale(1.03)" : "unset")};
  background: ${({ theme }) => theme.body};
  flex-wrap: wrap;
  z-index: ${({ activeTask }) => (activeTask ? 1 : 0)};
  position: relative;
  box-shadow: ${({ activeTask }) =>
    activeTask
      ? "0 4px 12px 2px rgba(0,0,0,0.2)"
      : "0 4px 12px rgba(0,0,0,0.2)"};
  box-sizing: border-box;
  /* margin: ${({ activeTask }) => (activeTask ? "0 0 15px " : "0 0 15px")}; */
  transition: ease-in-out 0.4s;
  ${({ status }) => {
    switch (status) {
      case "CANCELED":
        return css`
          background-color: ${({ theme }) => theme.text};
          color: ${({ theme }) => theme.body};
          & ${ListName} {
            color: ${({ theme }) => theme.body};
          }
        `;
      case "UPCOMING":
        return css`
          background-color: ${({ theme }) => theme.secondary};
          color: ${({ theme }) => theme.body};
          & ${ListName} {
            color: ${({ theme }) => theme.body};
          }
          & ${CircleTitle} {
            background-color: ${({ theme }) => theme.body};
            color: ${({ theme }) => theme.secondary};
          }
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.body};
          color: ${({ theme }) => theme.text};
        `;
    }
  }}/* &.status-CANCELED {
    border-color: red;
  }
  &.status-UPCOMING {
    border-color: ${({ theme }) => theme.secondary};
  } */
`;
export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ListName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  padding: 0 0 1rem;
  color: ${({ theme }) => theme.text};
`;
export const ListDescription = styled.div`
  /* height: 0; */
  transition: ease-in-out 0.3s;
  overflow: hidden;
  &.active {
    height: auto;
  }
`;
export const ShortDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: auto;
  transition: ease-in-out 0.3s;
  /* &.hide {
    height: 0;
  } */
`;
export const ListDate = styled.span`
  color: #b1b1b1;
  font-style: italic;
  margin-top: 15px;
`;
export const Task_header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & button {
    margin: 0 0 0 10px;
  }
`;

export const DescriptionWrapper = styled.div<{ height: number }>`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: ${({ height }) => height}px;
  transition: ease-in-out 0.3s;
`;
