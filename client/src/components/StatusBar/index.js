import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import { selectors as selectorsTheme } from 'pages/Drawer/store/reducer';

import { colors } from 'core/assets/styles';

const Bar = () => {
  const isDark = useSelector(state => selectorsTheme.getTheme(state));

  return (
    <StatusBar barStyle="light-content" backgroundColor={isDark ? colors.white : colors.primary} />
  );
};

export default Bar;
