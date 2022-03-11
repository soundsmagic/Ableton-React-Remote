import { Clip } from '../../types/types';
import { SingleClip } from '../SingleClip/SingleClip';
import { StyledSingleClip } from '../SingleClip/styled';
import { StyledClipContainer } from './styled';

interface ClipContainerProps {
    clipList: Clip[],
    clipLaunchHandler: (index: number) => void
}

export const ClipContainer = ({ clipList, clipLaunchHandler }: ClipContainerProps) => {
    return (
        <StyledClipContainer>
            {clipList.map((item) => {
                return item ?
                    <SingleClip key={item.clipIndex} clip={item} clipLaunchHandler={clipLaunchHandler} /> :
                    <StyledSingleClip>Empty</StyledSingleClip>
            })}
        </StyledClipContainer>
    );
};