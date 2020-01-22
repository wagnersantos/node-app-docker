import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Header, Input, DismissKeyboard } from 'components';
import { Container, Form, ContainerKeyboardAvoid } from './styled';

const Search = ({ navigation }) => {
  const [text, setText] = useState('');

  const isIos = Platform.OS === 'ios';

  return (
    <>
      <Header title="Listar posts" navigation={navigation} />

      <ContainerKeyboardAvoid behavior="padding" enabled={isIos}>
        <DismissKeyboard>
          <Container>
            <Form>
              <Input
                search
                label="Pesquisar posts"
                placeholder="Digite..."
                value={text}
                returnKeyType="go"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={text => setText(text)}
              />
            </Form>
          </Container>
        </DismissKeyboard>
      </ContainerKeyboardAvoid>
    </>
  );
};

Search.proTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Search;
