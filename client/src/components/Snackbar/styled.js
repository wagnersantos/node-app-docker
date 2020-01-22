import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { colors, metrics } from 'core/assets/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SnackbarContainer = styled(Animated.View)`
  flex: 1;
  background: transparent;
  position: absolute;
  flex-direction: row;
  align-items: center;
  left: 0;
  right: 0;
  min-height: 48px;
  padding: 0 ${metrics.basePadding}px;
  z-index: 999;
`;

export const Content = styled.View`
  flex: 1;
  background: ${colors.black};
  border-radius: ${metrics.baseRadius}px;
  padding: ${metrics.basePadding + 2}px ${metrics.basePadding + 6}px;
`;

export const SnackbarButton = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SnackBarIcon = styled(Icon).attrs({
  size: 20,
  color: colors.white,
})``;

export const CustomText = styled.Text`
  flex: 1;
  color: ${colors.white};
`;
