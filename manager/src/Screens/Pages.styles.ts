import { Grid } from "@mantine/core";
import styled from "styled-components"


export const PageContainer = styled.div `
max-width: 1300px;
margin: 0 auto;
`;

export const ColBorder = styled(Grid.Col)`
  border-right: 1px solid ${({theme}) => theme.toggleBorder};
`