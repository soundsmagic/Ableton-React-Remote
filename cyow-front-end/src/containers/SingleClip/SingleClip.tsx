import { ReactNode } from 'react';
import { StyledSingleClip } from './styled';

export const SingleClip = ({ children }: { children: ReactNode }) => {
    return (
        <StyledSingleClip>
            {children}
        </StyledSingleClip>
    );
};