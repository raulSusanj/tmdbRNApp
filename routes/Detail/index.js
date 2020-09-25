/**
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { global, fonts, colors } from '../../style';
import { Header, OverScrollView, Loading, Error } from '../../components';
import { styles } from './Detail.style';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchMovie, fetchMovieCredits } from '../../redux/actions';

const Detail = (props: Props) => {
  useEffect(() => {
    const movieId = props.route.params.movieId;
    props.fetchMovie(movieId);
    props.fetchMovieCredits(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createMainCredits = (cast, crew) => {
    const mainCast = cast.slice(0, 3);
    const mainCrew = crew.slice(0, 3);
    return mainCast.concat(mainCrew);
  };

  if (
    props.state.movieReducer.isFetching ||
    props.state.movieCreditsReducer.isFetching
  ) {
    return <Loading />;
  }

  if (
    props.state.movieReducer.errorMessage ||
    props.state.movieCreditsReducer.errorMessage
  ) {
    return <Error />;
  }

  const {
    poster_path,
    release_date,
    title,
    genres,
    overview,
    production_countries,
  } = props.state.movieReducer.movie;
  const { cast, crew } = props.state.movieCreditsReducer.movieCredits;

  const imgUri = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://d994l96tlvogv.cloudfront.net/uploads/film/poster/poster-image-coming-soon-placeholder-no-logo-500-x-740_22729.png';
  const releaseDate =
    release_date && `${moment(release_date).format('MM/DD/YYYY')}`;
  const productionCountries = production_countries?.map((i) => i.iso_3166_1);
  const year = release_date ? moment(release_date).format('YYYY') : '-';
  //TODO: check if needed whole crew/cast list
  // const mainCredits = cast.concat(crew);
  const mainCredits = cast && crew && createMainCredits(cast, crew);

  const renderHeader = () => (
    <Header
      imgUri={imgUri}
      title={title}
      year={year}
      dateAndLocation={`${releaseDate} ${productionCountries}`}
      genres={genres}
    />
  );

  return (
    <OverScrollView header={renderHeader()} height={400}>
      <View style={[global.container, global.contentContainer]}>
        <Text
          style={[
            fonts.title,
            styles.overviewLabel,
            { color: colors.primary },
          ]}>
          Overview
        </Text>
        <Text style={fonts.text}>{overview}</Text>
        <View style={styles.creditsRow}>
          {mainCredits &&
            mainCredits.length &&
            mainCredits.map((item) => {
              const role = item.character ? item.character : item.job;
              return (
                <View key={item.id} style={[global.column, styles.item]}>
                  <Text style={fonts.textAccent}>{item.name}</Text>
                  <Text style={fonts.text}>{role}</Text>
                </View>
              );
            })}
        </View>
      </View>
    </OverScrollView>
  );
};

type Props = {
  state: any,
  fetchMovie: Function,
  fetchMovieCredits: Function,
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
export default connect(mapStateToProps, { fetchMovie, fetchMovieCredits })(
  Detail,
);
