import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { Track } from '../../types/types';

export const SingleTrack = ({ track }: { track: Track }) => {
    return (
        <StyledSingleTrack>
            <StyledTrackHeader><span>{track.trackName}</span></StyledTrackHeader>
            <ClipContainer clipList={track.clipList} />
            <MuteButton muteStatus={track.muteStatus} />
        </StyledSingleTrack>
    );
};
