import { Dimensions, Platform, StyleSheet } from "react-native";

const onePixel = StyleSheet.hairlineWidth;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const statusBarHeight = (Platform.OS === 'ios' ? (windowWidth === 375 && windowHeight === 812 ? 44 : 20) : 0);

export {
  onePixel,
  windowWidth,
  windowHeight,
  statusBarHeight
}