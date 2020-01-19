import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HITSLOP } from 'core/constants';
import { colors, metrics } from 'core/assets/styles';
import { Content, ContentHome, Title } from './styled';

const Header = ({ title, home, navigation }) => (
  <>
    {home ? (
      <ContentHome>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          hitSlop={HITSLOP}>
          <Icon
            name="menu"
            size={25}
            style={{ color: colors.black, paddingRight: metrics.baseMargin }}
          />
        </TouchableOpacity>
        <Title numberOfLines={1}>{title}</Title>
        <Icon name="search" size={20} style={{ color: colors.black }} />
      </ContentHome>
    ) : (
      <Content>
        <TouchableOpacity
          hitSlop={HITSLOP}
          onPress={() => navigation.goBack(null)}>
          <Icon
            name="arrow-back"
            size={25}
            style={{ color: colors.black, paddingRight: metrics.baseMargin }}
          />
        </TouchableOpacity>
        <Title numberOfLines={1}>{title}</Title>
      </Content>
    )}
  </>
);

Header.defaultProps = {
  title: '',
  home: false,
  navigation: {},
};

Header.propTypes = {
  title: PropTypes.string,
  home: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
    openDrawer: PropTypes.func,
  }),
};

export default withNavigation(Header);
