/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './Thumbnail.style';

export const Thumbnail = (props: Props) => {
  const { imgUri, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{ uri: imgUri }} style={styles.image} />
    </TouchableOpacity>
  );
};

type Props = {
  imgUri: string,
};

Thumbnail.defaultProps = {
  imgUri:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Iron_Man_soundtrack_cover.jpg/220px-Iron_Man_soundtrack_cover.jpg',
};
