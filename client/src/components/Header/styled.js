import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, metrics } from 'core/assets/styles';
import { isIos } from 'environment';

const headerHeight = isIos ? 54 : 25;

export const ContentHome = styled.View`
  padding: ${metrics.basePadding / 2}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: ${headerHeight + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${({ isDark }) => (isDark ? colors.white : colors.primary)};
  elevation: 1;
`;

export const Content = styled.View`
  padding: ${metrics.basePadding / 2}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  height: ${headerHeight + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${({ isDark }) => (isDark ? colors.white : colors.primary)};
  elevation: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-right: ${metrics.baseMargin * 3}px;
  flex-grow: 1;
  align-self: flex-end;
  text-align: center;
  color: ${({ isDark }) => (isDark ? colors.black : colors.white)};
`;
