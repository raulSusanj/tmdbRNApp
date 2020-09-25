import { Platform } from 'react-native';
import { OverScrollView as OverScrollViewAndroid } from './index.android';
import { OverScrollView as OverScrollViewIOS } from './index.ios';

export const OverScrollView =
  Platform.OS === 'ios' ? OverScrollViewIOS : OverScrollViewAndroid;

export default OverScrollView;
