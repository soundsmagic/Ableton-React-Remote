import { ReactNode } from 'react';
import { StyledSingleTrack } from './styled';

export const SingleTrack = ({ children }: { children: ReactNode }) => {
    return (
        <StyledSingleTrack>
            {children}
        </StyledSingleTrack>
    );
};
