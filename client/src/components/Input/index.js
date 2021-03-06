import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from 'core/assets/styles';
import {
  Container,
  InputStyled,
  IconStyled,
  Action,
  TextStyled,
  TextContainer,
} from './styled';

const Input = ({
  autoFocus,
  search,
  onChangeText,
  onPress,
  value,
  placeholder,
  label,
  borderColor,
  focusColor,
  refs,
  isDark,
  ...rest
}) => {
  const [border, setBorder] = useState();
  const [valuePlaceholder, setValuePlaceholder] = useState('');
  const conditionPlaceholder = valuePlaceholder === '' ? '' : valuePlaceholder;
  const [fadeSlide, setFadeSlide] = useState(new Animated.Value(0));

  const initialAnimation = 7;
  const animationValue = -14;
  const speedAnimation = 200;

  const slideUp = () => {
    Animated.timing(fadeSlide, {
      toValue: animationValue,
      duration: speedAnimation,
      easing: Easing.inOut(Easing.linear),
    }).start(() => {
      setFadeSlide(new Animated.Value(animationValue));
    });
  };

  const slideDown = () => {
    if (!value) {
      Animated.timing(fadeSlide, {
        toValue: initialAnimation,
        duration: speedAnimation,
        easing: Easing.inOut(Easing.linear),
      }).start();
    }
  };

  const changeBorder = () => {
    slideUp();
    setBorder(focusColor === '' ? colors.white : focusColor);
    setValuePlaceholder(placeholder);
  };
  const focusOut = () => {
    slideDown();
    setBorder(borderColor);
    setValuePlaceholder('');
  };

  useEffect(() => {
    setBorder(borderColor);
    setFadeSlide(new Animated.Value(initialAnimation));
  }, [borderColor]);

  return (
    <Container>
      {!!label && (
        <TextContainer style={{ top: fadeSlide }}>
          <TextStyled  isDark={isDark}>{label}</TextStyled>
        </TextContainer>
      )}
      <InputStyled
        {...rest}
        ref={refs}
        value={value}
        placeholder={conditionPlaceholder}
        onChangeText={onChangeText}
        onEndEditing={onPress}
        autoFocus={autoFocus}
        border={border}
        onFocus={() => changeBorder()}
        onBlur={() => focusOut()}
        placeholderTextColor={isDark ? colors.white : colors.black}
        isDark={isDark}
      />
      {search && (
        <Action onPress={onPress}>
          <IconStyled name="search" size={25} isDark={isDark}/>
        </Action>
      )}
    </Container>
  );
};

Input.defaultProps = {
  autoFocus: false,
  onPress: () => {},
  placeholder: '',
  search: false,
  label: '',
  borderColor: '',
  focusColor: '',
  refs: () => {},
  isDark: false
};

Input.propTypes = {
  autoFocus: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onPress: PropTypes.func,
  placeholder: PropTypes.string,
  search: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  borderColor: PropTypes.string,
  focusColor: PropTypes.string,
  refs: PropTypes.func,
  isDark: PropTypes.bool,
};

export default Input;
