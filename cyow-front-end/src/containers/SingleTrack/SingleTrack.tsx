import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack, StyledTrackHeader } from './styled';
import { useToggleMuteMutation, useToggleSoloMutation } from '../../api/remoteScriptsApi';
import { Track } from '../../types/types';
import { SoloButton } from '../SoloButton/SoloButton';

export const SingleTrack = ({ trackIndex, trackName, muteStatus, soloStatus }: Track) => {
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

  return (
    <StyledSingleTrack>
      <StyledTrackHeader>
        <span>{trackName}</span>
      </StyledTrackHeader>
      <SoloButton soloStatus={soloMutationData ? soloMutationData.soloStatus : soloStatus} onClick={soloToggleHandler} />
      <MuteButton muteStatus={muteMutationData ? muteMutationData.muteStatus : muteStatus} onClick={muteToggleHandler} />
    </StyledSingleTrack>
  );
};
