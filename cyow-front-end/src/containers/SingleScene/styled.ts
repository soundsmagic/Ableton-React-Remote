import styled from 'styled-components';

export const StyledSingleScene = styled.div`
    padding: 3%;
    margin-bottom: 0.4em;
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
`;