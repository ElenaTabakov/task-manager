import styled from "styled-components";

export const CircleTitle = styled.div`
  background: ${({ theme }) => theme.yellow};
  color: #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  flex: 0 0 50px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  &.CANCELED {
    background: red;
  }
  &.UPCOMING {
    background: ${({ theme }) => theme.secondary};
  }
`;
