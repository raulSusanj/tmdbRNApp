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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 5,
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
