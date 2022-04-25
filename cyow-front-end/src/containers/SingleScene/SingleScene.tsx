import { useGetSingleSceneQuery, useLazyLaunchSceneQuery } from '../../api/remoteScriptsApi';
import { StyledSingleScene } from './styled';

export const SingleScene = ({ sceneIndex }: { sceneIndex: number }) => {
    const { data: scene, error, isLoading } = useGetSingleSceneQuery(sceneIndex);
    const [launchScene] = useLazyLaunchSceneQuery();
    const onClickHandler = () => {
        if (scene) {
            launchScene(scene.sceneIndex);
        }
    };
    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>E: {JSON.stringify(error)}</div>}
            {(!(isLoading && error) && scene) &&
                <StyledSingleScene>
                    <span onClick={onClickHandler}>{scene.sceneName}</span>
                </StyledSingleScene>
            }
        </>

    );
};