import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { useGetSingleTrackQuery, useToggleMuteMutation } from '../../api/remoteScriptsApi';

export const SingleTrack = ({ trackIndex }: { trackIndex: number }) => {
    const { data: track, error, isLoading } = useGetSingleTrackQuery(trackIndex);
    const [toggleMute] = useToggleMuteMutation();
    const muteToggleHandler = () => {
        if (track) {
            toggleMute({
                trackIndex: track.trackIndex,
                update: { muteStatus: !track.muteStatus }
            })
        }
    };
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Something went wrong!</div>}
            {(!(isLoading && error) && track) &&
                <StyledSingleTrack>
                    <StyledTrackHeader><span>{track.trackName}</span></StyledTrackHeader>
                    <ClipContainer clipList={track.clipList} />
                    {/* TODO: Skapa logik för klick på mute-knappen och triggande av mutation */}
                    <MuteButton muteStatus={track.muteStatus} onClick={muteToggleHandler} />
                </StyledSingleTrack>
            }
        </>
    );
};
