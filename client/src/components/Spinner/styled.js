import styled from 'styled-components/native';
import {metrics, colors} from 'core/assets/styles';

export const WrapperSpinnerFull = styled.View`
  align-items: center;
  background: ${colors.black};
  flex: 1;
  height: ${metrics.screenHeight};
  justify-content: center;
  padding: 5px;
  width: ${metrics.screenWidth};
`;

export const WrapperSpinner = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
  padding: 5px;
  height: 50px;
`;

export const Spin = styled.ActivityIndicator``;
