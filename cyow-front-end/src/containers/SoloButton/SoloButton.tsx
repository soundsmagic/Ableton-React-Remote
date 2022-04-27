import { StyledSoloButton } from './styled';

interface SoloButtonProps {
    soloStatus: boolean,
    onClick: () => void
}

export const SoloButton = ({ soloStatus, onClick }: SoloButtonProps) => {
    return (
        <StyledSoloButton soloStatus={soloStatus} onClick={onClick}>
            Solo
        </StyledSoloButton>
    );
};
