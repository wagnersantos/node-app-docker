import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';

import { selectors as selectorsDrawer } from 'pages/Drawer/store/reducer';
import { actions } from 'pages/Posts/store/actions';
import { selectors } from 'pages/Posts/store/reducer';

import { Header, Input, DismissKeyboard, List, Counter } from 'components';
import { isIos } from 'environment';
import { Container, Form, ContainerKeyboardAvoid } from './styled';
import { Item, ContainerText, StyledText, ItemText } from '../Posts/styled';

const Search = ({ navigation }) => {
  const [text, setText] = useState('');

  const isDark = useSelector(state => selectorsDrawer.getTheme(state));
  const posts = useSelector(state => selectors.getSearchPosts(state));

  const dispatch = useDispatch();
  const searchPosts = debounce(
    value => dispatch(actions.searchPosts.request(value)),
    100,
  );

  const handleSearch = value => {
    setText(value);

    if (value.length >= 3) {
      searchPosts(value);
    }
  };

  const renderItem = useCallback(item => (
    <Item isDark={isDark}>
      <ItemText numberOfLines={1} isDark={isDark}>
        {item.post}
      </ItemText>
      <Counter initialValue={item.upvote} isDark={isDark} />
    </Item>
  ));

  const renderList = useCallback(
    item => {
      if (posts.length === 0) {
        return (
          <ContainerText>
            <StyledText isDark={isDark}>Nenhum post encontrado</StyledText>
          </ContainerText>
        );
      }

      return (
        <List
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
      <Header title="Pesquisar posts" navigation={navigation} isDark={isDark} />

      <ContainerKeyboardAvoid
        behavior="padding"
        enabled={isIos}
        isDark={isDark}>
        <DismissKeyboard>
          <Container isDark={isDark}>
            <Form>
              <Input
                search
                label="Pesquisar"
                placeholder="Digite..."
                value={text}
                returnKeyType="go"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={value => handleSearch(value)}
                isDark={isDark}
              />
            </Form>

            {posts && renderList(posts)}
          </Container>
        </DismissKeyboard>
      </ContainerKeyboardAvoid>
    </>
  );
};

Search.defaultProps = {
  isDark: false,
};

Search.proTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  isDark: PropTypes.bool,
};

export default Search;
