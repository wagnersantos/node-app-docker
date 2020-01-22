/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, View } from 'react-native';

import { WrapperSpinnerFull, WrapperSpinner, Spin } from './styled';

const Spinner = ({ full, size, color, visible, indicator }) => {
  if (full) {
    return (
      <Modal transparent visible={visible}>
        <WrapperSpinnerFull>
          <Spin size={size} color={color} />
        </WrapperSpinnerFull>
      </Modal>
    );
  }

  if (visible) {
    return (
      <WrapperSpinner>
        <Spin size={size} color={color} />
      </WrapperSpinner>
    );
  }

  if (indicator) return <Spin size={size} color={color} />;

  return <View />;
};

Spinner.defaultProps = {
  size: 'small',
  color: '#FFFFFF',
  visible: false,
  full: false,
  indicator: false,
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  visible: PropTypes.bool,
  full: PropTypes.bool,
  indicator: PropTypes.bool,
};

export default Spinner;
