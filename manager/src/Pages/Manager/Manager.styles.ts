import styled, { css } from "styled-components";

export const ManagerHeader = styled.div`
    background: ${({theme}) => theme.secondary};
    color: ${({theme}) => theme.body};
    border-radius: 10px;
    padding: 1rem;
    margin-bottom: 2rem ;
`
export const InnerContainer = styled.div`
    display: grid;
    grid-template-areas:
        'calendar'
        'tasks';
    grid-template-columns: 350px 1fr;
    column-gap: 2rem;
    @media screen and (max-width:767px){
        grid-template-columns: 1fr;
    }
`
export const TasksWrapperContainer = styled.div `
    /* border-inline-start: 1px solid ${({theme}) => theme.toggleBorder}; */
    grid-area: 'tasks';
`