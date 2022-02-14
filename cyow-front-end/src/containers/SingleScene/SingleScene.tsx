import { useGetSingleSceneQuery } from '../../api/remoteScriptsApi';
import { StyledSingleScene } from './styled';

export const SingleScene = ({ sceneIndex }: { sceneIndex: number }) => {
    const { data: scene, error, isLoading } = useGetSingleSceneQuery(sceneIndex);
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Something went wrong!</div>}
            {(!(isLoading && error) && scene) &&
                <StyledSingleScene>
                    <span>{scene.sceneName}</span>
                </StyledSingleScene>
            }
        </>

    );
};