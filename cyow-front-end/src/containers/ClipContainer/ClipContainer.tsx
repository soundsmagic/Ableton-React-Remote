import { Clip } from '../../types/types';
import { SingleClip } from '../SingleClip/SingleClip';
import { StyledClipContainer } from './styled';

export const ClipContainer = ({ clipList }: { clipList: Clip[] }) => {
    return (
        <StyledClipContainer>
            {clipList.map((item) =>
                <SingleClip key={item.clipIndex} clip={item} />)}
        </StyledClipContainer>
    );
};