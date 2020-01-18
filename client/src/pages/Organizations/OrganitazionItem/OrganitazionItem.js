import React from 'react';

import { View, Text, Image } from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const OrganitazionItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

OrganitazionItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganitazionItem;
