import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { TouchableHighlight } from 'react-native';

import { colors } from 'core/assets/styles';
import { Header, Text, Button, List, Spinner } from 'components';
import { Container, Item, Actions } from './styled';

const Posts = ({ navigation }) => {
  const renderItem = useCallback(item => (
    <Item>
      <Text numberOfLines={1}>{item.post}</Text>
    </Item>
  ));

  const renderList = useCallback(
    item => (
      <List
        // keyExtractor={item => item.id}
        data={item.post}
        renderItem={renderItem}
      />
    ),
    [renderItem],
  );

  return (
    <>
      <Header title="Listar posts" home />
      <Container>
        {/* <Spinner visible={loaders} color={colors.white} /> */}
        {/* {posts && renderList(posts)} */}
        <Actions>
          <Button
            label="incluir post"
            onPress={() => navigation.navigate('PostRegister')}
          />
        </Actions>
      </Container>
    </>
  );
};

Posts.defaultProps = {
  navigation: {},
  isOut: false,
};

Posts.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.object,
  }),
  isOut: PropTypes.bool,
};

export default withNavigation(Posts);
