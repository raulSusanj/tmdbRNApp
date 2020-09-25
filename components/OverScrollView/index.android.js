// @flow
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { global } from '../../style';
import { styles } from './OverScrollView.style';

const HEADER_SCROLL = 200;

export class OverScrollView extends Component<Props, State> {
  scrollView: any;

  constructor(props: Props) {
    super(props);
    this.HEADER_SCROLL_DISTANCE = props.height ? props.height : HEADER_SCROLL;
    this.state = {};
  }

  render() {
    const { children, header } = this.props;
    return (
      <View style={global.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          ref={(ref) => {
            this.scrollView = ref;
          }}>
          <View
            style={[
              styles.imageContainerAndroid,
              { height: this.HEADER_SCROLL_DISTANCE },
            ]}>
            {header}
          </View>
          {children}
        </ScrollView>
      </View>
    );
  }
}

type Props = {
  children: any,
  header: any,
};
type State = {
  scrollY: Object,
};

export default OverScrollView;
