/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { metrics, colors } from 'core/assets/styles';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.secundary};
  padding-bottom: ${getBottomSpace()}px;
`;

export const ContainerKeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.secundary};
`;

export const Item = styled.View`
  align-items: center;
  background-color: ${colors.light};
  flex-direction: row;
  height: 49px;
  padding: ${metrics.basePadding / 2}px;
  justify-content: space-between;
`;

export const TextArea = styled.TextInput`
  background-color: ${colors.transparent};
  border-radius: ${metrics.baseRadius}px;
  border: 1px solid
    ${({ disable }) => (disable ? colors.disabled : colors.white)};
  color: ${colors.white};
  justify-content: flex-start;
  margin-bottom: ${metrics.baseMargin}px;
  padding: ${metrics.baseMargin}px;
  font-family: 'NunitoSans-Regular';
  font-size: 16px;
  max-height: 80%;
`;

export const Actions = styled.View`
  margin-top: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin * 3}px;
`;

export const ContainerText = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${colors.white};
`;
