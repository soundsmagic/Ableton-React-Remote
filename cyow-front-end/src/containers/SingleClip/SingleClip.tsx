import { Clip } from '../../types/types';
import { StyledSingleClip } from './styled';

export const SingleClip = ({ clip }: { clip: Clip }) => {
    return (
        <StyledSingleClip>
            <span>{clip.clipName}</span>
        </StyledSingleClip>
    );
};