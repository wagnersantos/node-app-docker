import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Header, Button, DismissKeyboard } from 'components';
import { Container, TextArea, ContainerKeyboardAvoid } from './styled';

const Posts = () => {
  const [text, setText] = useState();
  const [disableButton, setButton] = useState(true);

  const isIos = Platform.OS === 'ios';
  const minHeight = isIos ? 200 : 0;

  const handleTextArea = event => {
    const enable = event === '';
    setText(event);
    setButton(enable);
  };

  const handleNewPost = () => {
    Keyboard.dismiss();
  };

  return (
    <>
      <Header title="Incluir post" textAlign="center" />
      <ContainerKeyboardAvoid behavior="padding" enabled={isIos}>
        <DismissKeyboard>
          <Container>
            <TextArea
              keyboardAppearance="dark"
              multiline
              numberOfLines={10}
              onChangeText={event => handleTextArea(event)}
              value={text}
              maxLength={150}
              minHeight={minHeight}
            />
            <Button
              label="salvar post"
              onPress={handleNewPost}
              disabled={disableButton}
            />
          </Container>
        </DismissKeyboard>
      </ContainerKeyboardAvoid>
    </>
  );
};

export default Posts;
