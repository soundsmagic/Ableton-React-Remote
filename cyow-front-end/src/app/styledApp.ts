import styled from 'styled-components';
import { defaultTheme } from '../styling';

export const StyledApp = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 5%;
    background-color: ${defaultTheme.colors.mainBackground};
`;
