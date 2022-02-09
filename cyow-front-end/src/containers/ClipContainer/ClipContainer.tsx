import { SingleClip } from '../SingleClip/SingleClip';
import { StyledClipContainer } from './styled';

export const ClipContainer = () => {
    return (
        <StyledClipContainer>
            <SingleClip>
                <span>Clip 1</span>
            </SingleClip>
            <SingleClip>
                <span>Clip 2</span>
            </SingleClip>
            <SingleClip>
                <span>Clip 3</span>
            </SingleClip>
            <SingleClip>
                <span>Clip 4</span>
            </SingleClip>
        </StyledClipContainer>
    );
};