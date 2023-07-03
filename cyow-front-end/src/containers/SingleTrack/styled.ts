import styled from 'styled-components';

export const StyledSingleTrack = styled.div`
  width: 20%;
  padding: 1%;
  margin-right: 0.3em;
  border: ${({ theme }) => `${theme.boundaries.mainBorder} ${theme.colors.mainBorder}`};
  border-radius: ${({ theme }) => theme.boundaries.mainBorderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledTrackHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3%;
`;
