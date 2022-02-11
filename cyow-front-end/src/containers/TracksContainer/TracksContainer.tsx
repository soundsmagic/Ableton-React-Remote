import { useGetTracksQuery } from '../../api/remoteScriptsApi';
import { SingleTrack } from '../SingleTrack/SingleTrack';
import { StyledTracksContainer } from './styled';

export const TracksContainer = () => {
    const { data, error, isLoading } = useGetTracksQuery();
    return (
        <>
            {isLoading && <h3>Loading...</h3>}
            {error && <pre style={{ 'wordBreak': 'break-word' }}>{JSON.stringify(error, undefined, 2)}</pre>}
            {data && !isLoading && !error &&
                <StyledTracksContainer>
                    {data.map((item) => <SingleTrack key={item.trackIndex} track={item} />)}
                </StyledTracksContainer>
            }
        </>
    );
};
