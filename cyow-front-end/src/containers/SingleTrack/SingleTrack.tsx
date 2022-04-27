import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { useLazyLaunchClipQuery, useToggleMuteMutation, useToggleSoloMutation } from '../../api/remoteScriptsApi';
import { Track } from '../../types/types';
import { SoloButton } from '../SoloButton/SoloButton';

export const SingleTrack = ({ trackIndex, trackName, clipList, muteStatus, soloStatus }: Track) => {
    const [toggleMute, { data: muteMutationData }] = useToggleMuteMutation();
    const muteToggleHandler = () => {
        toggleMute({
            trackIndex,
            update: { muteStatus: !muteMutationData?.muteStatus },
        });
    };
    const [toggleSolo, { data: soloMutationData }] = useToggleSoloMutation();
    const soloToggleHandler = () => {
        toggleSolo({
            trackIndex,
            update: { soloStatus: !soloMutationData?.soloStatus },
        });
    };
    const [launchClip] = useLazyLaunchClipQuery();
    const clipLaunchHandler = (clipIndex: number) => {
        launchClip({
            trackIndex,
            clipIndex
        });
    }
    return (
        <StyledSingleTrack>
            <StyledTrackHeader><span>{trackName}</span></StyledTrackHeader>
            <ClipContainer clipList={clipList} clipLaunchHandler={clipLaunchHandler} />
            <SoloButton soloStatus={soloMutationData ? soloMutationData.soloStatus : soloStatus} onClick={soloToggleHandler} />
            <MuteButton muteStatus={muteMutationData ? muteMutationData.muteStatus : muteStatus} onClick={muteToggleHandler} />
        </StyledSingleTrack>
    );
};
