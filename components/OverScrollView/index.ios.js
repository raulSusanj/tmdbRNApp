// @flow
import React, { Component } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import { global } from '../../style';
import { styles } from './OverScrollView.style';

const HEADER_SCROLL = 200;

export class OverScrollView extends Component<Props, State> {
  HEADER_SCROLL_DISTANCE: number;
  scrollView: any;

  constructor(props: Props) {
    super(props);
    this.HEADER_SCROLL_DISTANCE = props.height ? props.height : HEADER_SCROLL;
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  renderHeader() {
    const headerTranslate = this.state.scrollY.interpolate({
      inputRange: [-200, 0, this.HEADER_SCROLL_DISTANCE],
      outputRange: [
        this.HEADER_SCROLL_DISTANCE + 200,
        this.HEADER_SCROLL_DISTANCE,
        0,
      ],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={[styles.imageContainerIOS, { height: headerTranslate }]}>
        {this.props.header}
      </Animated.View>
    );
  }

  render() {
    const { children } = this.props;
    return (
      <View style={global.container}>
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref;
          }}
          style={{ zIndex: 1 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: false },
          )}>
          <View style={{ height: this.HEADER_SCROLL_DISTANCE }} />
          {children}
        </ScrollView>
        {this.renderHeader()}
      </View>
    );
  }
}

type Props = {
  children: any,
  header: any,
  height: number,
};
type State = {
  scrollY: Object,
};

export default OverScrollView;
