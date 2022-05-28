import styled, { css } from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
`
export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ListName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`
export const ListDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const ListDate = styled.span`
  color:#b1b1b1;
  font-style: italic;
`

