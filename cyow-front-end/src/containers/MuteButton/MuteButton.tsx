import { StyledMuteButton } from './styled';

interface MuteButtonProps {
    muteStatus: boolean,
    onClick: () => void
}

export const MuteButton = ({ muteStatus, onClick }: MuteButtonProps) => {
    return (
        <StyledMuteButton muteStatus={muteStatus} onClick={onClick}>
            Mute
        </StyledMuteButton>
    );
};
