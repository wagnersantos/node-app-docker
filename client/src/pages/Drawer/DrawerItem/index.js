import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Switches } from 'components';
import { actions } from '../store/actions';

import { ItemMenu, CustomText } from './styled';

const DrawerItem = ({ isDark }) => {
  const dispatch = useDispatch();
  const setTheme = data => dispatch(actions.setTheme.receive(data));

  const toggleSwitch = () => {
    setTheme({ isDark: !isDark });
  };

  return (
    <>
      <ItemMenu onPress={toggleSwitch}>
        <CustomText isDark={isDark}>Modo escuro</CustomText>
        <Switches onValueChange={toggleSwitch} value={isDark} />
      </ItemMenu>
    </>
  );
};

export default DrawerItem;
