import { SingleScene } from '../SingleScene/SingleScene';
import { StyledScenesContainer } from './styled';

export const ScenesContainer = () => {
    return (
        <StyledScenesContainer>
            <SingleScene>
                <span>Scene 1</span>
            </SingleScene>
            <SingleScene>
                <span>Scene 2</span>
            </SingleScene>
            <SingleScene>
                <span>Scene 3</span>
            </SingleScene>
        </StyledScenesContainer>
    );
};
