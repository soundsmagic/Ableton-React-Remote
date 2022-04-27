import styled from 'styled-components';

interface SoloButtonProps {
    soloStatus: boolean
}

export const StyledSoloButton = styled.button<SoloButtonProps>`
    width: 100%;
    padding: 7% 0%;
    margin-top: auto;
    background: ${({ theme, soloStatus }) => soloStatus ? 'gold' : theme.colors.grey1};
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
`;
