import { SingleTrack } from '../SingleTrack/SingleTrack';
import { StyledTracksContainer } from './styled';

export const TracksContainer = () => {
    return (
        <StyledTracksContainer>
            <SingleTrack>Track 1</SingleTrack>
            <SingleTrack>Track 2</SingleTrack>
            <SingleTrack>Track 3</SingleTrack>
        </StyledTracksContainer>
    );
};
