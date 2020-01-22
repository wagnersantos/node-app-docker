import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectors as selectorsDrawer } from 'pages/Drawer/store/reducer';

import { Header, Input, DismissKeyboard } from 'components';
import { Container, Form, ContainerKeyboardAvoid } from './styled';

const Search = ({ navigation }) => {
  const [text, setText] = useState('');

  const isIos = Platform.OS === 'ios';

  const isDark = useSelector(state => selectorsDrawer.getTheme(state));

  return (
    <>
      <Header title="Pesquisar posts" navigation={navigation} />

      <ContainerKeyboardAvoid behavior="padding" enabled={isIos} isDark={isDark}>
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
                onChangeText={text => setText(text)}
                isDark={isDark}
              />
            </Form>
          </Container>
        </DismissKeyboard>
      </ContainerKeyboardAvoid>
    </>
  );
};

Search.defaultProps = {
  isDark: false
}

Search.proTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  isDark: PropTypes.bool,
};

export default Search;
