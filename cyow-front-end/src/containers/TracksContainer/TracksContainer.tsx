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
                    {data.map(track =>
                        <SingleTrack
                            key={track.trackIndex}
                            trackIndex={track.trackIndex}
                            trackName={track.trackName}
                            clipList={track.clipList}
                            muteStatus={track.muteStatus}
                        />)}
                </StyledTracksContainer>
            }
        </>
    );
};
