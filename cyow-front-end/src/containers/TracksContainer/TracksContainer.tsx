import { mockTrackList } from '../../mocks/mockData';
import { SingleTrack } from '../SingleTrack/SingleTrack';
import { StyledTracksContainer } from './styled';

export const TracksContainer = () => {
    return (
        <StyledTracksContainer>
            {mockTrackList.map((item) => <SingleTrack key={item.trackIndex} track={item} />)}
        </StyledTracksContainer>
    );
};
