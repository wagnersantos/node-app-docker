import React, { useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { actions } from './store/actions';

import { Header, Button, DismissKeyboard } from 'components';
import { Container, TextArea, ContainerKeyboardAvoid } from './styled';

const Posts = ({navigation}) => {
  const [text, setText] = useState();
  const [disableButton, setButton] = useState(true);

  const isIos = Platform.OS === 'ios';
  const minHeight = isIos ? 200 : 0;

  const dispatch = useDispatch();
  const setPost = (data) => dispatch(actions.setPost.request(data));

  const handleTextArea = event => {
    const enable = event === '';
    setText(event);
    setButton(enable);
  };

  const handleNewPost = () => {
    Keyboard.dismiss();
    setPost({
      post: text,
    });

    navigation.goBack();
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

export default withNavigation(Posts);
