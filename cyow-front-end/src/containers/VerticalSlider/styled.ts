import ReactSlider from 'react-slider';
import styled from 'styled-components';

export const StyledSlider = styled(ReactSlider)`
  flex: 5;
`;

export const StyledThumb = styled.div`
  height: 55px;
  line-height: 55px;
  width: 55px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: '#f00';
  border-radius: 999px;
`;
