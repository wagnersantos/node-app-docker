import React from 'react';
import PropTypes from 'prop-types';

import { Switch } from 'react-native';

const Switches = ({ disabled, value, onValueChange }) => (
  <>
    <Switch
      disabled={disabled}
      onValueChange={onValueChange}
      value={value}
      style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }}
    />
  </>
);

Switches.defaultProps = {
  disabled: false,
  value: false,
  onValueChange: () => {},
};

Switches.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  onValueChange: PropTypes.func,
};

export default Switches;
