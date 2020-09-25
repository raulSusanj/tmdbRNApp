import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    //TODO: Check what is better
    resizeMode: 'stretch',
    // resizeMode: 'cover',
  },
  headerContent: {
    padding: 16,
    maxWidth: 310,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
});
