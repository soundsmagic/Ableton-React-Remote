import { useChangeTrackSendValueMutation } from '../../api/remoteScriptsApi';
import { StyledSlider, StyledThumb, StyledTrack } from './styled';

interface Props {
  trackIndex: number;
  sendIndex: string;
}

type ChangeHandler = (value: number | readonly number[], index: number) => void;

export const VerticalSlider = ({ trackIndex, sendIndex }: Props) => {
  const [changeTrackSendValue] = useChangeTrackSendValueMutation();
  const afterChangeHandler: ChangeHandler = (newValue) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    changeTrackSendValue({
      trackIndex,
      update: { sendValue: { sendIndex, value } },
    });
  };

  return (
    <StyledSlider
      onAfterChange={afterChangeHandler}
      orientation="vertical"
      invert={true}
      renderThumb={(props, state) => <StyledThumb />}
      renderTrack={(props, state) => <StyledTrack />}
    />
  );
};
