import styled from 'styled-components/native';

import { colors, metrics } from 'core/assets/styles';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const ContentHome = styled.View`
  padding: ${metrics.basePadding}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: ${54 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${colors.white};
  elevation: 1;
`;

export const Content = styled.View`
  padding: ${metrics.basePadding}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  height: ${54 + getStatusBarHeight()}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${colors.white};
  elevation: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-right: ${metrics.baseMargin * 3}px;
  flex-grow: 1;
  align-self: flex-end;
  text-align: center;
`;