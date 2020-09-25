import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAEAEB',
    borderRadius: 10,
    height: 43,
    paddingLeft: 10,
  },
  input: {
    height: 43,
    width: 300,
    paddingLeft: 10,
    flex: 1,
  },
  cancel: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: { padding: 10 },
});
