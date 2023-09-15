import styled, { css } from "styled-components";

export const ActiveDay = styled.div `
    width: 90%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme})=> theme.mint};
    margin: 0;
    border-radius: 14px;
    color: #fff;
`
