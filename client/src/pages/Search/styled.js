import styled from 'styled-components/native';

import { colors, metrics } from 'core/assets/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ isDark }) =>
    isDark ? colors.secundary : colors.white};
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  align-items: stretch;
`;

export const Form = styled.View`
  margin: ${metrics.baseMargin * 2}px 0;
`;

export const ContainerKeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: row;
  background-color: ${({ isDark }) =>
    isDark ? colors.secundary : colors.white};
`;
