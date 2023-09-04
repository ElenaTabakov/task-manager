import styled, { css } from "styled-components";

export const ManagerHeader = styled.div`
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.body};
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem ;
`