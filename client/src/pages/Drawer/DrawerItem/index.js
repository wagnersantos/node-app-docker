import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Switches } from 'components';
import { actions } from '../store/actions';

import { ItemMenu, CustomText } from './styled';

const DrawerItem = ({ isDark }) => {
  const dispatch = useDispatch();
  const getTheme = () => dispatch(actions.fetchTheme.request());
  const setTheme = data => dispatch(actions.setTheme.request(data));

  const toggleSwitch = () => {
    setTheme({ isDark: !isDark });
  };

  useEffect(() => {
    getTheme();
  }, []);

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
