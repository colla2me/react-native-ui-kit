import { StyleSheet } from 'react-native';
import { windowHeight } from '../../utils/screen';

export default StyleSheet.create({
  maskLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },

  container: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    backgroundColor: '#f0f2f4',
    maxHeight: windowHeight * 0.6,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },

  title: {
    textAlign: 'center',
    fontSize: 16,
    color: '#686868',
  },

  closeBtn: {
    justifyContent: 'center',
    position: 'absolute',
    top: 10,
    right: 10,
    bottom: 10,
    paddingHorizontal: 12
  }
});