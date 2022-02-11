import { StyledMuteButton } from './styled';

interface MuteButtonProps {
    muteStatus: boolean,
    onClick: () => any
}

export const MuteButton = ({ muteStatus, onClick }: MuteButtonProps) => {
    return (
        <StyledMuteButton muteStatus={muteStatus} onClick={onClick}>
            Mute
        </StyledMuteButton>
    );
};
