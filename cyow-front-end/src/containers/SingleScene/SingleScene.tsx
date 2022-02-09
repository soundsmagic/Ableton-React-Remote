import { ReactNode } from 'react';
import { StyledSingleScene } from './styled';

export const SingleScene = ({ children }: { children: ReactNode }) => {
    return (
        <StyledSingleScene>
            {children}
        </StyledSingleScene>
    );
};