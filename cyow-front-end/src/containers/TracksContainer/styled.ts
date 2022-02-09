import styled from 'styled-components';

export const StyledTracksContainer = styled.div`
    width: 75%;
    margin-right: 2%;
    display: flex;
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius}; 
    box-shadow: ${({ theme }) => `${theme.boundaries.mainBoxShadow} ${theme.colors.mainBoxShadow}`};
`;