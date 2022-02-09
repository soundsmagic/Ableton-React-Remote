import { SingleTrack } from '../SingleTrack/SingleTrack';
import { StyledTracksContainer } from './styled';

export const TracksContainer = () => {
    return (
        <StyledTracksContainer>
            <SingleTrack></SingleTrack>
            <SingleTrack></SingleTrack>
            <SingleTrack></SingleTrack>
        </StyledTracksContainer>
    );
};
