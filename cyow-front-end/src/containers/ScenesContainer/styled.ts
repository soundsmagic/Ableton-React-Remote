import styled from 'styled-components';

export const StyledScenesContainer = styled.div`
    width: 25%;
    padding: 1%;
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius}; 
    box-shadow: ${({ theme }) => `${theme.boundaries.mainBoxShadow} ${theme.colors.mainBoxShadow}`};
`;