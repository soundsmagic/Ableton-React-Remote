import { StyledMuteButton } from './styled';

export const MuteButton = ({ muteStatus }: { muteStatus: boolean }) => {
    return (
        <StyledMuteButton muteStatus={muteStatus}>
            Mute
        </StyledMuteButton>
    );
};
