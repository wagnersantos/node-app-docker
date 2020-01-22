/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from './store/reducer';
import { actions } from './store/actions';

import {
  SnackbarContainer, SnackbarButton, Content, SnackBarIcon, CustomText,
} from './styled';

const Snackbar = () => {
  const message = useSelector(state => selectors.getMessage(state));
  const duration = useSelector(state => selectors.getDuration(state));
  const visible = useSelector(state => selectors.getVisible(state));
  const dismissSnackbar = useSelector(state => selectors.getDismiss(state));
  const dispatch = useDispatch();

  const [fadeSlide, setFadeSlide] = useState(new Animated.Value(0));
  const [present, setPresent] = useState(false);
  const [messageState, setMessageState] = useState(null);
  const [dismissTimeOut, setDismissTimeOut] = useState(null);
  const animationValue = 60;
  const animationDelay = 500;
  const speedAnimation = 200;

  const show = (dismiss) => {
    visible ? dismissImmediately() : null;
    setPresent(visible);
    setFadeSlide(new Animated.Value(-animationValue));
    setMessageState(message);
    setDismissTimeOut(dismiss);
  };

  const hide = () => {
    Animated.timing(fadeSlide,
      {
        toValue: -animationValue,
        duration: speedAnimation,
        easing: Easing.inOut(Easing.linear),
      })
      .start(() => {
        setPresent(visible);
        setMessageState(null);
        setDismissTimeOut(null);
      });
  };

  const handleHide = () => {
    dispatch(actions.hideSnackbar());
    hide();
  };

  const dismissImmediately = () => {
    setPresent(visible);
    setMessageState(null);
    setDismissTimeOut(null);
  };

  useEffect(() => {
    if (message) {
      const dismiss = setTimeout(() => {
        dispatch(actions.hideSnackbar());
      }, duration);

      clearTimeout(dismissTimeOut);
      show(message, dismiss);
    } else {
      dismissSnackbar ? dismissImmediately() : hide();
    }
  }, [message, duration]);

  useEffect(() => {
    Animated.timing(fadeSlide,
      {
        toValue: animationValue,
        duration: speedAnimation,
        delay: animationDelay,
        easing: Easing.inOut(Easing.linear),
      })
      .start();
  }, [fadeSlide]);

  if (!present) return null;

  return (
    <SnackbarContainer
      style={[
        { bottom: fadeSlide },
      ]}
    >
      <Content>
        <SnackbarButton onPress={() => handleHide()}>
          <CustomText isDark>
            {messageState}
          </CustomText>
          <SnackBarIcon name="close" />
        </SnackbarButton>
      </Content>
    </SnackbarContainer>
  );
};

export default Snackbar;
