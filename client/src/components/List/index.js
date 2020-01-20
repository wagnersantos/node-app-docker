/* eslint-disable react/jsx-indent */
import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { ViewSeparator } from './styled';

const List = ({ data, renderItem, keyExtractor, ...rest }) => {
  const flatListItemSeparator = () => <ViewSeparator />;

  return (
    <FlatList
      {...rest}
      ItemSeparatorComponent={flatListItemSeparator}
      keyExtractor={keyExtractor}
      data={data}
      renderItem={rowData => renderItem(rowData.item)}
    />
  );
};

List.defaultProps = {
  data: [],
  keyExtractor: item => item.id,
};

List.propTypes = {
  data: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
  renderItem: PropTypes.func.isRequired,
  keyExtractor: PropTypes.func,
};

export default List;
