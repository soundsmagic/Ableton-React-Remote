import { Clip } from '../../types/types';
import { SingleClip } from '../SingleClip/SingleClip';
import { StyledClipContainer } from './styled';

interface ClipContainerProps {
    clipList: Clip[],
    clipLaunchHandler: (index: number) => void
}

export const ClipContainer = ({ clipList, clipLaunchHandler }: ClipContainerProps) => {
    return (
        <StyledClipContainer>
            {clipList.map((item) =>
                <SingleClip key={item.clipIndex} clip={item} clipLaunchHandler={clipLaunchHandler} />)}
        </StyledClipContainer>
    );
};