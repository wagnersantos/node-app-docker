import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from 'core/assets/styles';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35px;
`;

export const ButtonIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const StyledIcon = styled(Icon)`
  color: ${({count}) => count === 0 ? colors.success : colors.green};
`;
