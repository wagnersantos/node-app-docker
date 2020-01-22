import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HITSLOP } from 'core/constants';

import { colors, metrics } from 'core/assets/styles';
import { Content, ContentHome, Title } from './styled';

const Header = ({ title, home, navigation, isDark }) => {
  console.tron.log(navigation);
  return (
    <>
      {home ? (
        <ContentHome isDark={isDark}>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            hitSlop={HITSLOP}>
            <Icon
              name="menu"
              size={25}
              style={{ color: isDark ? colors.black : colors.white, paddingRight: metrics.baseMargin }}
            />
          </TouchableOpacity>

          <Title numberOfLines={1} isDark={isDark}>{title}</Title>

          <TouchableOpacity
            onPress={() => navigation.navigate('Search')}
            hitSlop={HITSLOP}>
            <Icon
              name="search"
              size={20}
              style={{ color: isDark ? colors.black : colors.white }}
            />
          </TouchableOpacity>
        </ContentHome>
      ) : (
        <Content isDark={isDark}>
          <TouchableOpacity
            hitSlop={HITSLOP}
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back"
              size={25}
              style={
                { color: isDark ? colors.black : colors.white,
                   paddingRight: metrics.baseMargin
                }
              }
            />
          </TouchableOpacity>
          <Title numberOfLines={1} isDark={isDark}>{title}</Title>
        </Content>
      )}
    </>
  );
};

Header.defaultProps = {
  title: '',
  home: false,
  navigation: {},
  isDark: false
};

Header.propTypes = {
  title: PropTypes.string,
  home: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }),
  isDark: PropTypes.bool,
};

export default Header;
