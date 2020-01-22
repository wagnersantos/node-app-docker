import styled from 'styled-components/native';
import { metrics, colors } from 'core/assets/styles';

export const CustomText = styled.Text`
  font-weight: bold;
  line-height: 20px;
  color: ${({ isDark }) => (isDark ? colors.white : colors.black)};
`;

export const ItemMenu = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: ${metrics.basePadding}px;
`;
