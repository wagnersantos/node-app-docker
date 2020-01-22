import styled from 'styled-components/native';
import { colors } from 'core/assets/styles';

export const DrawerContainer = styled.ScrollView`
  background: ${({ isDark }) => (isDark ? colors.secundary : colors.white)};
`;

export const Separator = styled.View`
  border: 0.2px solid ${({ isDark }) => (isDark ? colors.white : colors.black)};
`;
