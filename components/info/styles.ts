import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: 265,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 40,
  },
  text: {
    borderLeftWidth: 2,
    borderColor: '#dedede',
  },
  label: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#dedede',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dedede',
  },
  size: {
    paddingHorizontal: 10,
  },
})