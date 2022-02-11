import { Scene } from '../../types/types';
import { StyledSingleScene } from './styled';

export const SingleScene = ({ scene }: { scene: Scene }) => {
    return (
        <StyledSingleScene>
            <span>{scene.sceneName}</span>
        </StyledSingleScene>
    );
};