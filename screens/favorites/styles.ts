import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: 10,
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  emptyContainer: {
    marginTop: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  empty: {
    fontSize: 16,
    color: '#c2c3c5'
  }
});