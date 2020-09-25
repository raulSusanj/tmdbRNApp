import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  width100: {
    width: '100%',
  },
  height100: {
    height: '100%',
  },
});
