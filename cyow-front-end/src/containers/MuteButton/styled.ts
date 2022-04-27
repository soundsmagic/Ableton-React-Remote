import styled from 'styled-components';

interface MuteButtonProps {
    muteStatus: boolean
}

export const StyledMuteButton = styled.button<MuteButtonProps>`
    width: 100%;
    padding: 7% 0%;
    margin-top: 7%;
    background: ${({ theme, muteStatus }) => muteStatus ? 'palevioletred' : theme.colors.grey1};
    border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
    border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
`;
