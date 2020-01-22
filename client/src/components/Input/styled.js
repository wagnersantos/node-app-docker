import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { metrics, colors } from 'core/assets/styles';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  height: 50px;
`;

export const InputStyled = styled.TextInput`
  background-color: ${colors.transparent};
  border-radius: ${metrics.baseRadius}px;
  border: 1px solid ${colors.white};
  color: ${colors.white};
  flex: 1;
  font-size: 16px;
  height: 50px;
  justify-content: flex-start;
  margin-bottom: ${metrics.baseMargin}px;
  padding: ${metrics.baseMargin}px;
  padding-right: 40px;
`;

export const TextContainer = styled(Animated.View).attrs({
  pointerEvents: 'none',
})`
  position: absolute;
  left: 13px;
  z-index: 999;
`;

export const TextStyled = styled.Text`
  font-weight: bold;
  font-size: 14px;
  background-color: ${colors.secundary};
  color: ${colors.white};
  padding: 0 3px;
`;

export const Action = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 5px;
`;

export const IconStyled = styled(Icon)`
  color: ${colors.white};
`;
