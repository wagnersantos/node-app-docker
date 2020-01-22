import React from 'react';
import PropTypes from 'prop-types';

import { colors } from 'core/assets/styles';
import { Spinner } from 'components';
import { ButtonContainer, ButtonText } from './styled';

const CustomButton = ({ onPress, label, disabled, loading }) => (
  <ButtonContainer
    onPress={() => (disabled ? null : onPress())}
    disable={disabled}>
    {loading ? (
      <Spinner indicator={loading} color={colors.white} />
    ) : (
      <ButtonText disable={disabled}>{label}</ButtonText>
    )}
  </ButtonContainer>
);

CustomButton.defaultProps = {
  disabled: false,
  loading: false,
};

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default CustomButton;
