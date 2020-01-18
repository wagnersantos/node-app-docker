import React, { Component } from 'react';

import {
  View, ActivityIndicator, AsyncStorage, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import api from '../../services/api';
import styles from './styles';
import OrganizationItem from './OrganitazionItem/OrganitazionItem';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.prototype = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@GitHuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);
    this.setState({ data, loading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadOrganizations}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    );
  }
}
