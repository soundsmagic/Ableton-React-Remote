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
                    {Array.from(Array(data).keys()).map((item) => <SingleTrack key={item} trackIndex={item} />)}
                </StyledTracksContainer>
            }
        </>
    );
};
