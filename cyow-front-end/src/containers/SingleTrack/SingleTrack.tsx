import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { Track } from '../../types/types';
import { useToggleMuteMutation } from '../../api/remoteScriptsApi';

export const SingleTrack = ({ track }: { track: Track }) => {
    const [toggleMute] = useToggleMuteMutation();
    const muteToggleHandler = () => {

    };
    return (
        <StyledSingleTrack>
            <StyledTrackHeader><span>{track.trackName}</span></StyledTrackHeader>
            <ClipContainer clipList={track.clipList} />
            {/* TODO: Skapa logik för klick på mute-knappen och triggande av mutation */}
            <MuteButton muteStatus={track.muteStatus} onClick={muteToggleHandler} />
        </StyledSingleTrack>
    );
};
