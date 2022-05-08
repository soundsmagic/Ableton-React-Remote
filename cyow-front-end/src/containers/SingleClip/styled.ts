import styled from 'styled-components';

export const StyledSingleClip = styled.div`
    padding: 6% 4%;
    margin-bottom: 0.4em;
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
`;