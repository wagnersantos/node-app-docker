import { StyleSheet } from 'react-native';
import { colors, metrics } from 'core/assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
