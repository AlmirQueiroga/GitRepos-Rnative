import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flex:{
    flexDirection:'row'
  }
})

export const logo = (fontSize:number) =>
StyleSheet.create({
  logo: {
    fontSize: fontSize
  }
});