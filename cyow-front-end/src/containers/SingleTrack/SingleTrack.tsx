import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';

export const SingleTrack = () => {
    return (
        <StyledSingleTrack>
            <StyledTrackHeader></StyledTrackHeader>
            <ClipContainer />
            <MuteButton />
        </StyledSingleTrack>
    );
};
