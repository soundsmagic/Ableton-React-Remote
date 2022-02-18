import { Clip } from '../../types/types';
import { StyledSingleClip } from './styled';

interface SingleClipProps {
    clip: Clip,
    clipLaunchHandler: (index: number) => void
}

export const SingleClip = ({ clip, clipLaunchHandler }: SingleClipProps) => {
    const onClickHandler: React.MouseEventHandler<HTMLDivElement> = event => {
        clipLaunchHandler(clip.clipIndex);
    }
    return (
        <StyledSingleClip onClick={onClickHandler}>
            <span>{clip.clipName}</span>
        </StyledSingleClip>
    );
};