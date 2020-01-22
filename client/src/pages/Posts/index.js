import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import debounce from 'lodash/debounce';

import { selectors as selectorsDrawer } from 'pages/Drawer/store/reducer';
import { selectors } from './store/reducer';
import { actions } from './store/actions';

import { Header, Button, List, Spinner, Counter } from 'components';
import { colors } from 'core/assets/styles';
import { Container, Item, Actions, ContainerText, StyledText } from './styled';

const Posts = ({ navigation }) => {
  const [isRefresh, setIsRefresh] = useState(false);

  const posts = useSelector(state => selectors.getPosts(state));
  const loaders = useSelector(state => selectors.getLoaders(state));
  const isDark = useSelector(state => selectorsDrawer.getTheme(state));

  const dispatch = useDispatch();
  const getPosts = () => dispatch(actions.fetchPosts.request());
  const updatePost = data => dispatch(actions.updatePost.request(data));

  useEffect(() => {
    getPosts();
  }, []);

  const onRefresh = () => {
    setIsRefresh(!isRefresh);
    getPosts();
  };

  const handleCounter = debounce(
    useCallback((upvote, { id }) => {
      updatePost({ upvote, id });
    }, []),
    500,
  );

  const renderItem = useCallback(item => (
    <Item isDark={isDark}>
      <Text numberOfLines={1}>{item.post}</Text>
      <Counter
        callBack={count => handleCounter(count, item)}
        initialValue={item.upvote}
      />
    </Item>
  ));

  const renderList = useCallback(
    item => {
      if (posts.length === 0) {
        return (
          <ContainerText>
            <StyledText isDark={isDark}>Adicione um post para começar</StyledText>
          </ContainerText>
        );
      }

      return (
        <List
          refreshing={loaders.postsList}
          onRefresh={onRefresh}
          keyExtractor={item => String(item.id)}
          data={item}
          renderItem={renderItem}
        />
      );
    },
    [renderItem],
  );

  return (
    <>
      <Header title="Listar posts" home navigation={navigation} isDark={isDark} />
      <Container isDark={isDark} >
        <Actions>
          <Button
            label="incluir post"
            onPress={() => navigation.navigate('PostRegister')}
            isDark={isDark}
          />
        </Actions>

        {loaders.postsList && !isRefresh ? (
          <Spinner visible color={colors.white} />
        ) : (
          renderList(posts)
        )}
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
