import React from 'react';
import PropTypes from 'prop-types';

import { HeaderDrawer, User, CustomIcon, Fill, CustomText } from './styled';

const DrawerHeader = ({ name, isDark }) => (
  <HeaderDrawer >
    <User isDark={isDark}>
      <CustomIcon name="person" isDark={isDark}/>
      <Fill isDark={isDark}/>
    </User>
    <CustomText isDark={isDark}>{name}</CustomText>
  </HeaderDrawer>
);

DrawerHeader.defaultProps = {
  name: 'User',
  isDark: false,
};

DrawerHeader.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  isDark: PropTypes.bool,
};
export default DrawerHeader;
