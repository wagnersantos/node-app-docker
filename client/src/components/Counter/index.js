import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container, ButtonIcon, StyledIcon, CounterText } from './styled';

const Counter = ({ callBack, initialValue, isDark }) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    const increment = count + 1;
    setCount(increment);
    callBack(increment);
  };

  return (
    <Container>
      <ButtonIcon onPress={incrementCount}>
        <StyledIcon name="arrow-upward" size={20} count={count} />
      </ButtonIcon>
      {count > 0 && <CounterText isDark={isDark}>{count}</CounterText>}
    </Container>
  );
};

Counter.defaultProps = {
  callBack: () => {},
  initialValue: 0,
  disabled: false,
};

Counter.propTypes = {
  callBack: PropTypes.func,
  initialValue: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Counter;
