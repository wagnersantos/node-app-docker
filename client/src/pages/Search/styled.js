import styled from 'styled-components/native';

import { colors, metrics } from 'core/assets/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secundary};
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  align-items: stretch;
`;

export const Form = styled.View`
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const ContainerKeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: row;
  background-color: ${colors.secundary};
`;
