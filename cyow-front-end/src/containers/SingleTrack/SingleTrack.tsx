import { ClipContainer } from '../ClipContainer/ClipContainer';
import { MuteButton } from '../MuteButton/MuteButton';
import { StyledSingleTrack } from './styled';

export const SingleTrack = () => {
    return (
        <StyledSingleTrack>
            <span>Track name</span>
            <ClipContainer />
            <MuteButton />
        </StyledSingleTrack>
    );
};
