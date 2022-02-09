import styled from 'styled-components';

export const StyledMuteButton = styled.button`
    width: 100%;
    padding: 7% 0%;
    margin-top: auto;
    background: ${({ theme }) => theme.colors.grey1};
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
`;
