import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  topContainer: {
    padding: 10,
  },
  topChip: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    marginVertical:5
  },
  topChipText:{
    fontWeight:'bold',
    fontSize: 16
  },
  input: {
    width: '95%',
    height:40,
    marginBottom: '5%'
  },
  closeButton: {
    borderRadius:20,
    backgroundColor: '#dedede',
    borderColor: '#dedede',
  },
  loader: {
    marginVertical: 10,
  },
  labelStyle:{
    color:'black', 
    fontWeight: 'bold'
  },
  confirmButton:{
    width:'50%', 
    backgroundColor:'#dedede', 
    alignSelf:'center', 
    borderRadius:20
  }
})