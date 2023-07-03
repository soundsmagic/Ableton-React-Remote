import { Slider } from '@mui/material';
import { useChangeTrackSendValueMutation } from '../../api/remoteScriptsApi';
import { OnChangeCommittedHandler as CommittedChangeHandler } from './types';

interface Props {
  trackIndex: number;
  sendIndex: string;
}

export const VerticalSlider = ({ trackIndex, sendIndex }: Props) => {
  const [changeTrackSendValue] = useChangeTrackSendValueMutation();
  const committedChangeHandler: CommittedChangeHandler = (event, newValue) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    changeTrackSendValue({
      trackIndex,
      update: { sendValue: { sendIndex, value } },
    });
  };

  return (
    <Slider
      sx={{
        '& input[type="range"]': {
          WebkitAppearance: 'slider-vertical',
        },
      }}
      orientation="vertical"
      onChangeCommitted={committedChangeHandler}
      defaultValue={0}
      aria-label="Volume"
      valueLabelDisplay="auto"
    />
  );
};
