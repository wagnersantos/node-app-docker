import styled from 'styled-components/native';
import { metrics, colors } from 'core/assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const HeaderDrawer = styled.View`
  align-items: center;
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const User = styled.View`
  flex: 1;
  background: ${colors.white};
  height: 120px;
  width: 120px;
  border-radius: ${metrics.baseRadius * 20}px;
  margin-top: ${metrics.baseMargin * 2 + getStatusBarHeight()}px;
  margin-bottom: ${metrics.baseMargin + 5}px;
  align-items: center;
  align-content: center;
`;

export const CustomIcon = styled(Icon).attrs({
  size: 110,
})`
  margin-top: ${metrics.baseMargin}px;
  color: ${colors.secundary};
`;

export const Fill = styled.View`
  position: absolute;
  background: ${colors.secundary};
  width: 72px;
  height: 30px;
  bottom: 0;
  border-radius: ${metrics.baseRadius * 2}px;
`;

export const CustomText = styled.Text`
  font-weight: bold;
  line-height: 20px;
  color: ${colors.white};
`;
