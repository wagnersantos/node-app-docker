import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Text } from 'react-native';

import { selectors } from './store/reducer';
import { actions } from './store/actions';

import { Header, Button, List, Spinner } from 'components';
import { colors } from 'core/assets/styles';
import { Container, Item, Actions } from './styled';

const Posts = ({ navigation }) => {
  const posts = useSelector(state => selectors.getPosts(state));
  const loaders = useSelector(state => selectors.getLoaders(state));

  const dispatch = useDispatch();
  const getPosts = () => dispatch(actions.fetchPosts.request());

  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = () => getPost();

  const renderItem = useCallback(item => (
    <Item>
      <Text numberOfLines={1}>{item.post}</Text>
    </Item>
  ));

  const renderList = useCallback(
    item => (
      <List
        // onRefresh={onRefresh}
        keyExtractor={item => String(item.id)}
        data={item}
        renderItem={renderItem}
      />
    ),
    [renderItem],
  );

  return (
    <>
      <Header title="Listar posts" home />
      <Container>
        <Actions>
          <Button
            label="incluir post"
            onPress={() => navigation.navigate('PostRegister')}
          />
        </Actions>

       {
        loaders.postsList ? 
        <Spinner visible color={colors.white} />
          : renderList(posts)
      }
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
