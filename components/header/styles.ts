import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topView:{
    marginTop:'15%'
  },
  input: {
    width: '100%',
    paddingVertical: 12,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5,
  },
  chipText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chipContent: {
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: '#dedede',
  },
  loader: {
    marginVertical: 10,
  },
})