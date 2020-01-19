import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

import {Input} from 'components';
import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {username: '', loading: false, error: false};

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  saveUser = async username => {
    await AsyncStorage.setItem('@GitHuber:username', username);
  };

  sigIn = async () => {
    const {username} = this.state;
    const {navigation} = this.props;

    this.setState({loading: true});

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);

      navigation.navigate('User');
    } catch (err) {
      this.setState({loading: false, error: true});
    }
  };

  render() {
    const {username, loading, error} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Informe seu usuário no gitHub</Text>

        {error && <Text style={styles.error}>Usuário inexistente</Text>}

        <View style={styles.form}>
          <Input
            search
            label="Pesquisar posts"
            placeholder="Digite..."
            // onChangeText={text => setUsername(text)}
            value={username}
            returnKeyType="go"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => this.setState({username: text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.sigIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Welcome;