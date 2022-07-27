import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constants/theme';

const {screenWrapper} = StyleSheet.create({
  screenWrapper: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: COLORS.background,
    marginBottom: SIZES.tabBarHeight + 20,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marinTop: 75,

    borderBottomColor: '#ccc2',
    borderBottomWidth: 4,
    borderRightColor: '#ccc2',
    borderRightWidth: 4,
    borderLeftColor: '#ccc2',
    borderLeftWidth: 1,
  },
});

export {screenWrapper};
