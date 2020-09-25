/**
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { debounce } from 'lodash';
import { global, fonts } from '../../style';
import { SearchBar, Thumbnail, Error } from '../../components';
import { styles } from './Home.style';
import { connect } from 'react-redux';
import { fetchPopularMovies } from '../../redux/actions';

const Home = (props: Props) => {
  const list = useRef();
  const [searchInput, setSearchInput] = useState('');
  const [inputActive, setInputActive] = useState(false);
  const [hideContent, setHideContent] = useState(false);
  useEffect(() => {
    props.fetchPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeTextInput = (input) => {
    if (searchInput && searchInput.length > 1) {
      debounce(() => {
        props.fetchPopularMovies(searchInput);
        setHideContent(false);
      }, 500)();
    }
    setSearchInput(input);
  };

  const onCancel = () => {
    setSearchInput('');
    setInputActive(false);
    setHideContent(false);
    props.fetchPopularMovies(null, 1, true);
  };

  const onFocus = () => {
    setHideContent(true);
    setInputActive(true);
  };

  const fetchMorePages = (pageNumber, search) => {
    props.fetchPopularMovies(search, pageNumber + 1);
  };

  const {
    popularMovies,
    isFetching,
    errorMessage,
    page,
  } = props.state.popularMoviesReducer;

  if (errorMessage) {
    return <Error />;
  }
  const imgUrlBase = 'https://image.tmdb.org/t/p/w500';

  const renderItem = (item) => {
    const thumbnailImage = item.poster_path
      ? imgUrlBase + item.poster_path
      : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_22729.png';
    return (
      <Thumbnail
        key={item.poster_path}
        imgUri={thumbnailImage}
        onPress={() =>
          props.navigation.navigate('Detail', { movieId: item.id })
        }
      />
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.titleContainer}>
        <Text style={[fonts.title]}>What's popular</Text>
      </View>
    );
  };

  const renderFooter = () => {
    if (!isFetching) {
      return null;
    }
    return (
      <View style={styles.listLoad}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <View style={[global.container, global.contentContainer]}>
      <SearchBar
        placeholder="Search"
        value={searchInput}
        onChangeText={(input) => onChangeTextInput(input)}
        onClearText={() => setSearchInput('')}
        onCancel={onCancel}
        onFocus={onFocus}
        inputActivity={inputActive}
      />

      {!hideContent && (
        <FlatList
          ref={list}
          data={popularMovies}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0}
          onEndReached={() => fetchMorePages(page, searchInput)}
          ListHeaderComponent={renderHeader()}
          ListFooterComponent={renderFooter()}
          //TODO: check with Ilijan what is better
          // columnWrapperStyle={{ justifyContent: 'space-between' }}
          columnWrapperStyle={global.justifyCenter}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => item.id + index}
          horizontal={false}
          numColumns={3}
        />
      )}
    </View>
  );
};

type Props = {
  state: any,
  fetchPopularMovies: Function,
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, {
  fetchPopularMovies,
})(Home);
