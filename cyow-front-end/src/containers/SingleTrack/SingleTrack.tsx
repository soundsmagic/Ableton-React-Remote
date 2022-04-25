import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { useGetSingleTrackQuery, useLazyLaunchClipQuery, useToggleMuteMutation } from '../../api/remoteScriptsApi';
import { nanoid } from '@reduxjs/toolkit';

export const SingleTrack = ({ trackIndex }: { trackIndex: number }) => {
    const { data: track, error, isLoading } = useGetSingleTrackQuery(trackIndex);
    const [toggleMute] = useToggleMuteMutation();
    const muteToggleHandler = () => {
        if (track !== undefined) {
            const requestId = nanoid();
            console.log(`Calling Toggle Mute mutation at timestamp ${Date.now()} with ID ${requestId}`)
            toggleMute({
                trackIndex: track.trackIndex,
                update: { muteStatus: !track.muteStatus },
                id: requestId
            });
        }
    };
    const [launchClip] = useLazyLaunchClipQuery();
    const clipLaunchHandler = (index: number) => {
        if (track) {
            launchClip({
                trackIndex: track.trackIndex,
                clipIndex: index
            });
        }
    }
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {(!(isLoading && error) && track) &&
                <StyledSingleTrack>
                    <StyledTrackHeader><span>{track.trackName}</span></StyledTrackHeader>
                    <ClipContainer clipList={track.clipList} clipLaunchHandler={clipLaunchHandler} />
                    <MuteButton muteStatus={track.muteStatus} onClick={muteToggleHandler} />
                </StyledSingleTrack>
            }
        </>
    );
};
