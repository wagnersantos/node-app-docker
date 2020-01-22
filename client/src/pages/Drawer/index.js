import React from 'react';
import { useSelector } from 'react-redux';

import { selectors } from './store/reducer';

import { Separator, DrawerContainer } from './styled';
import DrawerHeader from './DrawerHeader';
import DrawerItem from './DrawerItem';

const Drawer = () => {
  const isDark = useSelector(state => selectors.getTheme(state));

  return (
    <DrawerContainer isDark={isDark}>
      <DrawerHeader isDark={isDark} />
      <Separator isDark={isDark} />
      <DrawerItem isDark={isDark} />
    </DrawerContainer>
  );
};

export default Drawer;
