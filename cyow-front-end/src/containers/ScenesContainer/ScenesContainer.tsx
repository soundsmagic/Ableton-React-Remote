import { useGetScenesQuery } from '../../api/remoteScriptsApi';
import { SingleScene } from '../SingleScene/SingleScene';
import { StyledScenesContainer } from './styled';

export const ScenesContainer = () => {
    const { data, error, isLoading } = useGetScenesQuery();
    return (
        <>
            {isLoading && <h3>Loading...</h3>}
            {error && <pre style={{ 'wordBreak': 'break-word' }}>{JSON.stringify(error, undefined, 2)}</pre>}
            {data && !isLoading && !error &&
                <StyledScenesContainer>
                    {data.map(scene => <SingleScene key={scene.sceneIndex} sceneIndex={scene.sceneIndex} sceneName={scene.sceneName} />)}
                </StyledScenesContainer>}
        </>
    );
};
