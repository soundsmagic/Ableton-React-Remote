import { SingleScene } from '../SingleScene/SingleScene';
import { StyledScenesContainer } from './styled';

export const ScenesContainer = () => {
    return (
        <StyledScenesContainer>
            <SingleScene>Scene 1</SingleScene>
            <SingleScene>Scene 2</SingleScene>
            <SingleScene>Scene 3</SingleScene>
        </StyledScenesContainer>
    );
};
