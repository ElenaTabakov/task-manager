import styled from "styled-components";

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  box-sizing: border-box;
  &.status-CANCELED {
    border-color: red;
  }
  &.status-UPCOMING {
    border-color: ${({ theme }) => theme.secondary};
  }

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
`;
export const ListDescription = styled.div`
  height:0;
  transition: ease-in-out 0.3s;
  overflow: hidden;
  &.active{
    height: auto;
  }
`;
export const ShortDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height:auto;
  transition: ease-in-out 0.3s;
  &.hide{
    height: 0;
  }
`;
export const ListDate = styled.span`
  color: #b1b1b1;
  font-style: italic;
  margin-top:15px ;
`;
export const Task_header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & button{
    margin: 0 0 0 10px;
  }
`;