// consider change modal styles and stylesheet to won component

import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  modal:{
    backgroundColor: 'rgba(0,0,0,0.2)', 
    flex: 1, 
    justifyContent: 'flex-end', 
    zIndex: 10
  },
  content:{
    backgroundColor: '#FFF', 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  splash:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})