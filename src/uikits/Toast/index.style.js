import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  text: {
    color: '#fff',
    fontSize: 18
  },

  icon: {
    color: '#fff',
    marginRight: 8,
  }
});