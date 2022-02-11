import { mockSceneList } from '../../mocks/mockData';
import { SingleScene } from '../SingleScene/SingleScene';
import { StyledScenesContainer } from './styled';

export const ScenesContainer = () => {
    return (
        <StyledScenesContainer>
            {mockSceneList.map((item) =>
                <SingleScene key={item.sceneIndex} scene={item} />
            )}
        </StyledScenesContainer>
    );
};
