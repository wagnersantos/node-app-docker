/* eslint-disable no-nested-ternary */
import styled from 'styled-components/native';

import { colors, metrics } from 'core/assets/styles';

export const ButtonContainer = styled.TouchableOpacity`
  min-height: 35px;
  padding-left: ${metrics.baseMargin}px;
  padding-right: ${metrics.baseMargin}px;
  border: 1px solid
    ${({ disable }) => (disable ? colors.disabled : colors.black)};
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.transparent};
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: ${({ disable }) => (disable ? colors.disabled : colors.black)};
  text-align: center;
  text-transform: uppercase;
`;
