import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const IMAGE_HEIGHT = 200;

export const styles = StyleSheet.create({
  imageContainerIOS: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width,
  },
  imageContainerAndroid: {
    width,
  },
});
