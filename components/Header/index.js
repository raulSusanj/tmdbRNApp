/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { global, fonts, colors } from '../../style';
import { styles } from './Header.style';

export const Header = (props: Props) => {
  const { imgUri, title, year, dateAndLocation, genres } = props;
  return (
    <ImageBackground
      source={{ uri: imgUri }}
      style={styles.backgroundImageContainer}
      imageStyle={styles.backgroundImage}>
      <View style={styles.overlay} />
      <View style={styles.headerContent}>
        <View style={global.row}>
          <Text style={[fonts.headerTitle, { color: colors.light }]}>
            {title}
          </Text>
          <Text style={[fonts.headerTitle, { color: colors.light }]}>
            {' '}
            ({year})
          </Text>
        </View>
        <Text style={[fonts.text, { color: colors.light }]}>
          {dateAndLocation}
        </Text>
        <View style={global.row}>
          {genres &&
            genres.map((genre, index) => {
              const comma = index === genres.length - 1 ? ' ' : ', ';
              return (
                <Text style={[fonts.text, { color: colors.light }]}>
                  {genre.name + comma}
                </Text>
              );
            })}
        </View>
      </View>
    </ImageBackground>
  );
};

type Props = {
  title: string,
  subtitle: string,
  imgUri: string,
};

Header.defaultProps = {
  title: 'Iron man (2008)',
  subtitle: '05/02/2008 (US) Action, Science Fiction, Adventure 2h 6m',
  imgUri:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/Iron_Man_soundtrack_cover.jpg/220px-Iron_Man_soundtrack_cover.jpg',
};
