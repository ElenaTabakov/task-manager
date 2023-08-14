import styled from "styled-components";
import { device } from "../../../../../../styles/theme";

export const SideBarWrapper = styled.div`
    padding: 0 1rem;
    @media (max-width:768px){
        max-width: 100%;
    }
`

export const ButtonClose = styled.button`
    transform: rotate(45deg);
    background: rgba(0,0,0,0);
    border: none;
    font-size: 2.5rem;
    padding: 0;
    float: right;
    cursor: pointer;
`