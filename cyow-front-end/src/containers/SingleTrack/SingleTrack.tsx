import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { useLazyLaunchClipQuery, useToggleMuteMutation } from '../../api/remoteScriptsApi';
import { Track } from '../../types/types';

export const SingleTrack = ({ trackIndex, trackName, clipList, muteStatus }: Track) => {
    const [toggleMute, { data }] = useToggleMuteMutation();
    const muteToggleHandler = () => {
        toggleMute({
            trackIndex,
            update: { muteStatus: !muteStatus },
        });
    };
    const [launchClip] = useLazyLaunchClipQuery();
    const clipLaunchHandler = (index: number) => {
        launchClip({
            trackIndex,
            clipIndex: index
        });
    }
    return (
        <StyledSingleTrack>
            <StyledTrackHeader><span>{trackName}</span></StyledTrackHeader>
            <ClipContainer clipList={clipList} clipLaunchHandler={clipLaunchHandler} />
            <MuteButton muteStatus={data ? data.muteStatus : muteStatus} onClick={muteToggleHandler} />
        </StyledSingleTrack>
    );
};
