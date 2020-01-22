import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useSelector, useDispatch } from 'react-redux';

import { selectors as selectorsDrawer } from 'pages/Drawer/store/reducer';
import { actions } from './store/actions';

import { isIos } from 'environment';
import { Header, Button, DismissKeyboard } from 'components';
import { Container, TextArea, ContainerKeyboardAvoid } from './styled';

const PostsRegister = ({ navigation }) => {
  const [text, setText] = useState();
  const [disableButton, setButton] = useState(true);

  const minHeight = isIos ? 200 : 0;

  const isDark = useSelector(state => selectorsDrawer.getTheme(state));

  const dispatch = useDispatch();
  const setPost = data => dispatch(actions.setPost.request(data));

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
      <Header title="Incluir post" textAlign="center" navigation={navigation} isDark={isDark} />

      <ContainerKeyboardAvoid behavior="padding" enabled={isIos}>
        <DismissKeyboard>
          <Container isDark={isDark}>
            <TextArea
              keyboardAppearance="dark"
              multiline
              numberOfLines={10}
              onChangeText={event => handleTextArea(event)}
              value={text}
              maxLength={150}
              minHeight={minHeight}
              isDark={isDark}
            />
            <Button
              label="salvar post"
              onPress={handleNewPost}
              disabled={disableButton}
              isDark={isDark}
            />
          </Container>
        </DismissKeyboard>
      </ContainerKeyboardAvoid>
    </>
  );
};

PostsRegister.proTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default withNavigation(PostsRegister);
