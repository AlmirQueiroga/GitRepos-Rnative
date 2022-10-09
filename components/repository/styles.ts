import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    alignSelf:'center',
    width: '95%',
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    marginBottom: 10,
  },
  header:{
    flexDirection:'row', 
    justifyContent: 'space-between', 
    borderBottomWidth:1, 
    borderBottomColor:'#dedede', 
    height:50, 
    marginBottom:10
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  profileAvatar: {
    borderRadius:20, 
    width:29, 
    height:29
  },
  title: {
    fontSize: 12
  },
  titleName:{
    fontWeight:'bold',
    fontSize: 12
  }
});

export const fav = (isAlreadyIncluded:boolean) =>
StyleSheet.create({
  text: {
    borderColor: isAlreadyIncluded ? '#faf3dc' : '#dedede',
    color: isAlreadyIncluded ? '#ffd02c' : 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 40,
    borderRadius: 8,
    backgroundColor: isAlreadyIncluded ? '#faf3dc' : '#dedede'
  }
});