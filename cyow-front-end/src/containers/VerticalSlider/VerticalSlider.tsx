import Slider from 'rc-slider';
import { useChangeTrackSendValueMutation } from '../../api/remoteScriptsApi';

interface Props {
  trackIndex: number;
  sendIndex: string;
}

type ChangeHandler = (value: number | number[]) => void;

export const VerticalSlider = ({ trackIndex, sendIndex }: Props) => {
  const [changeTrackSendValue] = useChangeTrackSendValueMutation();
  const afterChangeHandler: ChangeHandler = (newValue) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;
    changeTrackSendValue({
      trackIndex,
      update: { sendValue: { sendIndex, value } },
    });
  };

  return <Slider vertical={true} onAfterChange={afterChangeHandler} />;
};
